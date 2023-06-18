import { act, renderHook, waitFor } from "@testing-library/react";
import { ThemeProviderContext, useThemeContext } from "./useTheme";

describe('useTheme', () => {
  it('should switch theme', async () => {

    const { result } = renderHook(() => useThemeContext(), {
      wrapper: ({ children }) => (
        <ThemeProviderContext>
          <div>{children}</div>
        </ThemeProviderContext>
      ),
    })

    act(() => {
      result.current.handleThemeChange('dark')
    })

    await waitFor(() => expect(result.current.selectedTheme).toBe('dark'))
  })

  it('should already have a theme in localStorage', async () => {
    act(() => localStorage.setItem("current-theme", JSON.stringify("light")))
    
    const { result } = renderHook(() => useThemeContext(), {
      wrapper: ({ children }) => (
        <ThemeProviderContext>
          <div>{children}</div>
        </ThemeProviderContext>
      ),
    })
    
    await waitFor(() => expect(result.current.selectedTheme).toBe('light'))
  })
})