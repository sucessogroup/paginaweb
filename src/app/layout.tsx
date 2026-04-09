import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sucesso Group',
  description: 'En SUCESSO diseñamos y producimos eventos corporativos con alma. Creemos que los detalles transforman un evento en una experiencia que deja huella.',
  openGraph: {
    title: 'Sucesso Group',
    description: 'Expertos en organización de eventos premium y corporativos con alma.',
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
        <meta name="theme-color" content="#19373E" />
      </head>
      <body className="font-body antialiased bg-background text-white selection:bg-brand-canary/30">{children}</body>
    </html>
  );
}
