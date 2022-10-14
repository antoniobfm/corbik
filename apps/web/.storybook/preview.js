import React from 'react';
import GlobalStyle from "../src/GlobalStyle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#0C0B0F',
      },
    ],
  },
}

const Fonts = () => <link rel="stylesheet" href="https://use.typekit.net/vwf4vfo.css" />;

export const decorators = [
  (Story) => (
    <>
      <Fonts />
      <GlobalStyle />
      <Story />
    </>
  ),
];