import styled from 'styled-components';
import { theme } from '../../styles/defaultTheme';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.625rem;
  font-weight: 700;

  @media screen and (max-width: ${theme.screens.md}){
    font-size: 1.375rem;
  }
`

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.grayLight};
  font-weight: 700;
  transition: filter 0.2s ease-in;

  svg {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.grayLight}
  }

  &:hover {
    filter: brightness(0.9)
  }

  @media screen and (max-width: ${theme.screens.md}){
    font-size: 0.75rem;
  }
`
