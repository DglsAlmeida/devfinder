import { ReactNode } from "react"
import { ThemeProviderContext } from "../../context/useTheme"
import { GlobalStyles } from "../../styles/global"
import * as S from './styles'

export interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProviderContext>
      <S.LayoutContainer>
        <main>
          {children}
        </main>
        <GlobalStyles />
      </S.LayoutContainer>
    </ThemeProviderContext>
  )
}