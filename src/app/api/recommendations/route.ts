
import { NextResponse } from 'next/server';

/**
 * Endpoint para obtener recomendaciones de tours y actividades de Amadeus.
 * Maneja autenticación OAuth2 y caché de 24 horas.
 */

const AMADEUS_AUTH_URL = 'https://test.api.amadeus.com/v1/security/oauth2/token';
const AMADEUS_ACTIVITIES_URL = 'https://test.api.amadeus.com/v1/shopping/activities/by-square';

// Definición de Coordenadas (Bounding Boxes)
// Formato: [north, south, east, west]
const BOUNDING_BOXES: Record<string, [number, number, number, number]> = {
  zihuatanejo: [17.68, 17.60, -101.50, -101.60],
  guerrero: [18.00, 16.50, -99.00, -102.00],
  mexico: [19.50, 19.00, -99.00, -99.30], // Enfocado en CDMX
};

async function getAmadeusToken() {
  const response = await fetch(AMADEUS_AUTH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.AMADEUS_CLIENT_ID || '',
      client_secret: process.env.AMADEUS_CLIENT_SECRET || '',
    }),
  });

  if (!response.ok) throw new Error('Failed to get Amadeus token');
  const data = await response.json();
  return data.access_token;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const area = searchParams.get('area')?.toLowerCase() || 'zihuatanejo';

  const coords = BOUNDING_BOXES[area];
  if (!coords) {
    return NextResponse.json({ error: 'Área no válida' }, { status: 400 });
  }

  try {
    const token = await getAmadeusToken();
    const [north, south, east, west] = coords;
    
    const apiUrl = `${AMADEUS_ACTIVITIES_URL}?north=${north}&south=${south}&east=${east}&west=${west}`;
    
    const response = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 86400 } // Caché de 24 horas
    });

    if (!response.ok) {
      console.error('Amadeus API error:', await response.text());
      return NextResponse.json([]);
    }

    const data = await response.json();

    // Normalización de la respuesta
    const normalizedData = (data.data || []).map((item: any) => ({
      title: item.name,
      shortDescription: item.shortDescription || item.description?.substring(0, 150) + '...',
      price: item.price?.amount || 'N/A',
      currency: item.price?.currencyCode || 'MXN',
      rating: item.rating || '4.5',
      image: item.pictures?.[0] || 'https://picsum.photos/seed/activity/600/400',
      bookingLink: item.bookingLink || '#',
      location: item.geoCode ? `${item.geoCode.latitude}, ${item.geoCode.longitude}` : area,
      category: area.charAt(0).toUpperCase() + area.slice(1)
    }));

    return NextResponse.json(normalizedData);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json([], { status: 500 });
  }
}
