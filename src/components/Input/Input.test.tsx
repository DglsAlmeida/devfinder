import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Input } from "."
import { customRender } from "../../utils/setupTests"

describe('<Input />', () => {
  it('should type a git hub user and search a user after search button is clicked', async () => {
    const user = userEvent.setup()
    const handleUserSearch = jest.fn();

    customRender(<Input handleUserSearch={handleUserSearch} isLoading={false} error={false} />)

    const userToSearchAtGithubApi = 'DgLsAlmeida'

    const searchInput = screen.getByRole('textbox')
    const searchButton = screen.getByRole('button', { name: /search/i })

    await user.type(searchInput, userToSearchAtGithubApi)
    user.click(searchButton)

    expect(searchInput).toHaveValue(userToSearchAtGithubApi)
    await waitFor(() => expect(handleUserSearch).toHaveBeenCalledWith(userToSearchAtGithubApi))
    await waitFor(() => expect(handleUserSearch).toHaveBeenCalled())
    await waitFor(() => expect(handleUserSearch).toHaveBeenCalledTimes(1))
  })
})