import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#EEEEEE',
  black: '#111111',
  gray: '#333333',
  lightgray: '#A3A3A3',
  green: '#10AC84'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
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

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

  .margin-top {
    margin-top: 24px;
  }
`
