import { Moon, SunDim } from 'phosphor-react'
import { useThemeContext } from '../../context/useTheme'
import * as S from './styles'

export const Header = () => {
  const { handleThemeChange, selectedTheme } = useThemeContext()

  return (
    <S.HeaderContainer>
      <S.Title>devfinder</S.Title>
      <S.ThemeToggle onClick={() => handleThemeChange(selectedTheme === 'dark' ? 'light' : 'dark')}>
        {selectedTheme.toUpperCase()}
        {selectedTheme === 'light' ? <SunDim size={32} /> : <Moon size={32} /> }
      </S.ThemeToggle>
    </S.HeaderContainer>
  )
}