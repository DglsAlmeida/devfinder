import { screen } from '@testing-library/react'
import { ProfileCard } from '.'
import { user } from '../../mocks/userData'
import { UserGithubProfile } from '../../types/home/types'
import { customRender } from '../../utils/setupTests'

describe('<ProfileCard />', () => {
  it('should render correctly', () => {
    const props: UserGithubProfile = {
      ...user,
      reposQuantity: "0",
    }

    customRender(<ProfileCard {...props} />)

    const name = screen.getByText(/Douglas Almeida/i)

    expect(name).toBeInTheDocument()
  })
})