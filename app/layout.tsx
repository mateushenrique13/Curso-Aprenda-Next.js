import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
        {/* aqui estamos aplicando a fonte Inter ao corpo do documento HTML usando a classe `inter.className` que foi exportada do arquivo de fontes. A classe `antialiased` é usada para melhorar a renderização da fonte, tornando-a mais suave e legível. */}
    </html>
  );
}
