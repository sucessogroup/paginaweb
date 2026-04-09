
# SUCESSO Group - Plataforma Digital

Este proyecto es la presencia digital de SUCESSO, enfocada en el diseño y producción de eventos corporativos de alto impacto.

## Guía de Medios (Imágenes y Video)

Para mantener el rendimiento premium del sitio, sigue estas recomendaciones:

### Imágenes
- **Formatos soportados:** WebP (Recomendado), JPG, PNG.
- **NO USAR .HEIC:** Los navegadores no lo visualizan. Debes convertirlos a WebP o JPG antes de subirlos.
- **Optimización:** Intenta que las imágenes de galería no superen los 500KB.
- **Dimensiones:** Para el Hero o fondos, usa imágenes de al menos 1920px de ancho.

### Videos
- **Formato:** MP4 (H.264) para máxima compatibilidad.
- **Logo Animado:** El archivo `logo3.mp4` debe mantenerse en `/public/` para que el componente `LogoVideo` funcione correctamente.
- **Integración de Color:** 
  - Desktop: Fondo `#19373E`
  - Mobile: Fondo `#173035` (Ajustado para coincidir con el renderizado de video en dispositivos móviles).

## Configuración Técnica
- **Framework:** Next.js 15 (App Router)
- **Estilos:** Tailwind CSS
- **Componentes:** ShadCN UI
- **Storytelling:** Enfoque editorial cinematográfico en la sección de procesos.

## Estructura de Archivos
- `/src/components/LogoVideo.tsx`: Maneja el logo animado del Hero con máscara de suavizado radial.
- `/src/app/lib/placeholder-images.json`: Diccionario de imágenes del sitio.
