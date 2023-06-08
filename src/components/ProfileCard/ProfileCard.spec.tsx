import { render, screen } from '@testing-library/react'
import { ProfileCard } from '.'
import { ThemeProviderContext } from '../../context/useTheme'
import { user } from '../../mocks/userData'
import { UserGithubProfile } from '../../types/home/types'

describe('<ProfileCard />', () => {
  it('should render correctly', () => {
    const props: UserGithubProfile = {
      ...user,
      reposQuantity: "0",
    }

    render(
      <ThemeProviderContext>
        <ProfileCard {...props} />
      </ThemeProviderContext>
    )

    const name = screen.getByText(/Douglas Almeida/i)

    expect(name).toBeInTheDocument()
  })
})