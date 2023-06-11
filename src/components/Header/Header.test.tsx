import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Header } from "."
import { customRender } from "../../utils/setupTests"

describe('<Header>', () => {
  it('should switch theme when user clicks on header button theme', async () => {
    const user = userEvent.setup()

    customRender(<Header />)

    const themeButton = screen.getByRole('button', { name: /dark/i })

    user.click(themeButton)
    
    await waitFor(() => expect(themeButton).toHaveTextContent('LIGHT'))

    user.click(themeButton)

    await waitFor(() => expect(themeButton).toHaveTextContent('DARK'))
  })
})