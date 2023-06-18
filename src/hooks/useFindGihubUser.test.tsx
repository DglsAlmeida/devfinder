import { act, renderHook, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../mocks/server';
import { user } from '../mocks/userData';
import { useFindGithubUser } from './useFindGitHubUser';

describe('useFindGihubUser', () => {
  it('should does a request for github API', async () => {
    const { result } = renderHook(() => useFindGithubUser())

    act(() => {
      result.current.handleUserSearch('DgLsAlmeida')
    })

    expect(result.current.loading).toBeTruthy()

    await waitFor(() => expect(result.current.error).toBeFalsy())

    await waitFor(() => expect(result.current.user).toEqual({
      ...user,
      reposQuantity: 8,
    }))
  })

  it('should return error true after request', async () => {
    const { result } = renderHook(() => useFindGithubUser())

    server.use(
      rest.get('https://api.github.com/users/:user', (_req, res, ctx) => {
        return res(ctx.status(404))
      }),
      rest.get('https://api.github.com/users/:user/repos', (_req, res, ctx) => {
        return res(ctx.status(404))
      })
    )

    act(() => {
      result.current.handleUserSearch('wawadawdwadawd')
    })

    expect(result.current.loading).toBeTruthy()

    await waitFor(() => expect(result.current.error).toBeTruthy())
    
    await waitFor(() => expect(result.current.user).toEqual({}))
  })
})