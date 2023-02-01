import styled from "styled-components";
import { theme } from '../../styles/defaultTheme';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 45.625rem;
  margin: 4.375rem auto 1.875rem;

  main {
    width: 100%;
  }

  @media screen and (max-width: ${theme.screens.md}){
    max-width: 35.812rem;
  }

  @media screen and (max-width: ${theme.screens.sm}){
    max-width: 20.4375rem;
  }

  @media screen and (max-width: ${theme.screens.xsm}){
    max-width: 18.75rem;
  }
`