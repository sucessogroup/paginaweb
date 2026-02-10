# Boda Carla & Said - Invitación Digital

Este es el proyecto de la invitación digital para la boda de Carla y Said en Zihuatanejo.

## Configuración de APIs

Para que la sección de **Recomendaciones** funcione (alimentada por Amadeus), debes configurar las siguientes variables de entorno:

1. `AMADEUS_CLIENT_ID`
2. `AMADEUS_CLIENT_SECRET`

### Desarrollo Local
1. Crea un archivo `.env.local` en la raíz del proyecto.
2. Copia el contenido de `.env.example`.
3. Reemplaza los valores con tus credenciales de [Amadeus for Developers](https://developers.amadeus.com/).

### Producción (Firebase App Hosting)
Configura las variables de entorno directamente en la consola de Firebase, dentro de la configuración de App Hosting de tu proyecto.

## Estructura del Proyecto
- `/src/app/boda-carla-said`: Página principal de la invitación.
- `/src/app/recomendaciones-*`: Páginas de turismo dinámicas.
- `/src/app/api/recommendations`: Endpoint que conecta con Amadeus.
