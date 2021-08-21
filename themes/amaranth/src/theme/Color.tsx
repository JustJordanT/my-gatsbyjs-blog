import { createGlobalStyle, css } from "styled-components";

const Colors = css`
  :root {
    --color-primary-100: #e3f2fd;
    --color-primary-200: #e3f2fd;
    --color-primary-300: #bbdefb;
    --color-primary-400: #90caf9;
    --color-primary: #1e88e5;
    --color-primary-600: #64b5f6;
    --color-primary-700: #42a5f5;
    --color-primary-800: #2196f3;
    --color-primary-900: #1e88e5;

    --color-grey-100: #f7f7f7;
    --color-grey-200: #dbdbdb;
    --color-grey-300: #c0c0c0;
    --color-grey-400: #adadad;
    --color-grey-500: #9a9a9a;
    --color-grey-600: #6e6e6e;
    --color-grey-700: #414141;
    --color-grey-800: #2e2e2e;
    --color-grey-900: #1a1a1a;

    --color-text: #000000;
    --color-inverted-text: #ffffff;
    --color-background: #ffffff;
    --color-inverted-background: #000000;
  }
`;

const Color = createGlobalStyle`
    ${Colors}
`;

export default Color;
