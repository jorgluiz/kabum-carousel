import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos adicionais */
  body {
    font-family: 'Poppins', sans-serif;/* Escolha a fonte padrão desejada */
    background-color: #f0f0f0; /* Cor de fundo padrão */
  }

  /* Adicione mais estilos globais conforme necessário */
`

export default GlobalStyle


// 1 Estilos de Texto e Cores Padrão:

// Defina estilos padrão para tags de texto como p, h1 a h6, etc. Isso pode incluir cor, tamanho da fonte, espaçamento, etc.
// Estabeleça uma paleta de cores global que você usará em todo o projeto.

// 2 Estilos de Links:

// Estilize links para que se destaquem e indiquem seu estado (visitado, não visitado, hover).

// 3 Estilos de Botões:

// Defina estilos básicos para botões para manter consistência em todo o aplicativo.

// 4 Estilos de Layout:

// Se você tiver um layout padrão para seu aplicativo (como cabeçalho, navegação, conteúdo principal, rodapé), pode ser útil definir estilos para esses elementos.

// 5 Media Queries:

// Se você estiver criando um design responsivo, pode ser útil definir breakpoints globais e estilos responsivos básicos.


// const GlobalStyle = createGlobalStyle`
//   /* Reset básico */
//   *, *::before, *::after {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   /* Estilos globais */
//   body {
//     font-family: Arial, sans-serif;
//     background-color: #f0f0f0;
//     color: #333;
//     line-height: 1.6;
//   }

//   a {
//     color: #0070f3;
//     text-decoration: none;
//   }

//   a:hover {
//     text-decoration: underline;
//   }

//   button {
//     font-family: inherit;
//     background: #0070f3;
//     color: #fff;
//     border: none;
//     padding: 0.5rem 1rem;
//     cursor: pointer;
//   }

//   button:hover {
//     background: #005bb5;
//   }

//   /* Media queries */
//   @media (max-width: 1200px) {
//     body {
//       font-size: 18px;
//     }
//   }

//   @media (max-width: 992px) {
//     body {
//       font-size: 16px;
//     }
//   }

//   @media (max-width: 768px) {
//     body {
//       font-size: 14px;
//     }
//   }

//   @media (max-width: 576px) {
//     body {
//       font-size: 12px;
//     }
//   }
// `;
