import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#EEEEEE',
  black: '#111111',
  gray: '#333333',
  green: '#10AC84'
}

export const GlobalCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    padding-top: 40px;
    background-color: ${colors.black};
    color: ${colors.white};
  }

  .globalContainer {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
