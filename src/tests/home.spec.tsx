import { describe } from '@jest/globals';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { server } from '../mocks/server';
import Home from '../pages';
import { customRender } from '../utils/setupTests';

describe('Home', () => {
  it('should render a card correctly', async () => {
    const user = userEvent.setup()

    customRender(<Home />)

    const userToSearchAtGithubApi = 'DgLsAlmeida'

    const searchButton = screen.getByText(/search/i);
    const searchInput = screen.getByRole('textbox')

    await user.type(searchInput, userToSearchAtGithubApi)
    user.click(searchButton)

    expect(searchInput).toHaveValue(userToSearchAtGithubApi)

    await waitFor(() => expect(screen.getByTestId('skeleton-loading')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByText('Douglas Almeida')).toBeInTheDocument())

    expect(searchInput).not.toHaveValue(userToSearchAtGithubApi)
  })

  it('should render a no result text inside search input', async () => {
    const user = userEvent.setup()

    server.use(
      rest.get('https://api.github.com/users/:user', (_req, res, ctx) => {
        return res(ctx.status(404))
      }),
      rest.get('https://api.github.com/users/:user/repos', (_req, res, ctx) => {
        return res(ctx.status(404))
      })
    )

    customRender(<Home />)

    const randomSearchValue = 'wawadawdwadawd'

    const searchButton = screen.getByText(/search/i);
    const searchInput = screen.getByRole('textbox')

    await user.type(searchInput, randomSearchValue)
    user.click(searchButton)

    expect(searchInput).toHaveValue(randomSearchValue)

    await waitFor(() => expect(screen.getByTestId('skeleton-loading')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByText('No results')).toBeInTheDocument())

    expect(searchInput).not.toHaveValue(randomSearchValue)
  })
});