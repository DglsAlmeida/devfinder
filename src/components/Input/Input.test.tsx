import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Input } from "."
import { customRender } from "../../utils/setupTests"

describe('<Input />', () => {
  it('should type a git hub user and search a user after search button is clicked', async () => {
    const user = userEvent.setup()
    const handleUserSearch = jest.fn();

    customRender(<Input handleUserSearch={handleUserSearch} isLoading={false} error={false}/>)

    const searchInput = screen.getByRole('textbox')

    await user.type(searchInput, 'DgLsAlmeida')

    expect(searchInput).toHaveValue('DgLsAlmeida')
  })
})