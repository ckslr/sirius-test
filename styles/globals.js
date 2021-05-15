import { css, Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body,
      body > div:first-of-type,
      div#__next,
      div#__next > div {
      }

      html,
      body {
        background: #f6f9ff;
        padding: 0;
        margin: 0;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
          Helvetica Neue, sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }

      input[type="range"] {
        background-color: transparent;
        -webkit-appearance: none;
      }

      input[type="range"]:focus {
        outline: none;
      }

      input[type="range"]::-webkit-slider-thumb {
        box-sizing: content-box;
        -webkit-appearance: none;
        appearance: none;
      }

      input[type="range"]::-webkit-slider-runnable-track {
        box-sizing: content-box;
      }

      h1 {
        margin: 0;
        padding: 0;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `}
  />
);
