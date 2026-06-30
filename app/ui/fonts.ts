import { Inter, Lusitana } from 'next/font/google';

// Nesse arquivo, estamos importando a fonte Inter do Google Fonts usando o Next.js.
// A função `Inter` é chamada com um objeto de configuração que especifica os
// subconjuntos de caracteres que queremos incluir, neste caso, apenas o subconjunto 'latin'.
// O resultado é exportado como uma constante chamada `inter`, que pode ser usada em outros
//  componentes ou páginas do aplicativo para aplicar a fonte Inter.
export const inter = Inter({ subsets: ['latin'] });
 
// Aqui precisamos add o weight da fonte pois sem isso a fonte não vai funcionar,
// e também precisamos add o subset latin, pois é o que vamos usar no nosso projeto.
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});