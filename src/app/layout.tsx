
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Boda Carla & Said',
  description: '¡Acompáñanos a celebrar nuestro amor el 20 de diciembre de 2026 en Zihuatanejo, Guerrero!',
  openGraph: {
    title: 'Boda de Carla & Said',
    description: '¡Los esperamos para celebrar juntos nuestro para siempre!',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Literata:opsz,wght@7..72,400;500;600;700&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
