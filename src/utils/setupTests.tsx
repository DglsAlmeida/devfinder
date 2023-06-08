import { RenderOptions, RenderResult, render } from "@testing-library/react";
import { PropsWithChildren, ReactElement } from "react";
import { ThemeProviderContext } from "../context/useTheme";

type RenderWithFunction = (
  ui: ReactElement,
  options?: RenderOptions
) => RenderResult

const wrapper = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <ThemeProviderContext>
      {children}
    </ThemeProviderContext>
  )
}

export const customRender: RenderWithFunction = (ui, options) => {
  return render(ui, {
    wrapper,
    ...options
  })
}
