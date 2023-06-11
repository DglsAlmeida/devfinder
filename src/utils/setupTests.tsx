import { RenderOptions, RenderResult, render } from "@testing-library/react";
import { PropsWithChildren, ReactElement } from "react";
import { Layout } from "../components/Layout";

type RenderWithFunction = (
  ui: ReactElement,
  options?: RenderOptions
) => RenderResult

const wrapper = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Layout>
      {children}
    </Layout>
  )
}

export const customRender: RenderWithFunction = (ui, options) => {
  return render(ui, {
    wrapper,
    ...options
  })
}
