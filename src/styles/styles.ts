import { createGlobalStyle } from 'styled-components'

const colors = {
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
  }

  body{
    background-color: ${colors.black};
    color: ${colors.white};
  }
`
