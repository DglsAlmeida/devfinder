import { MagnifyingGlass } from "phosphor-react"
import { useState } from "react"
import * as S from './styles'

type inputProps = {
  handleUserSearch: (user: string) => void
  isLoading: boolean;
  error: boolean;
}

export const Input = ({ handleUserSearch, isLoading, error }: inputProps) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = () => {
    handleUserSearch(searchInput)
    setSearchInput('')
  }

  return (
    <S.InputContainer>
      <S.WrapperInput>
        <MagnifyingGlass size={32} />
        <S.InputStyled 
          value={searchInput}
          placeholder="Search GitHub username..." 
          maxLength={30}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {error && <S.ErrorMessage>No results</S.ErrorMessage>}
      </S.WrapperInput>
      <S.SearchButton 
        onClick={handleSearch} 
        disabled={isLoading} 
        isLoading={isLoading}
      >
        Search
      </S.SearchButton>
    </S.InputContainer>
  )
}