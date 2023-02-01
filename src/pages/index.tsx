import { useCallback, useReducer } from "react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { ProfileCard } from "../components/ProfileCard";
import { ProfileCardLoading } from "../components/ProfileCardLoading";
import { api } from "../services/api";
import { UserActionTypes, UserGithubProfile, UserState } from "../types/home/types";

const initialState: UserState = {
  user: {} as UserGithubProfile,
  error: false,
  loading: false
}

export const reducer = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case UserActionTypes.REQUEST_USER: {
      return { ...state, loading: true }
    }
    case UserActionTypes.SUCCESS_USER: {
      return { user: {...action.payload}, loading: false, error: false }
    }
    case UserActionTypes.FAILURE_USER: {
      return { user: {}, loading: false, error: true }
    }
    default: {
      return state
    }
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleUserSearch = useCallback(async (user: string) => {
    if (user) {
      dispatch({ type: UserActionTypes.REQUEST_USER })
      try {
        const { data: userGithubData } = await api.get(`users/${user}`)
        const { data: userGithubRepos } = await api.get(`users/${user}/repos`)

        dispatch({ 
          type: UserActionTypes.SUCCESS_USER, 
          payload: {
            ...userGithubData,
            reposQuantity: userGithubRepos.length
          }
        })
      
      } catch (err) {
        dispatch({ type: UserActionTypes.FAILURE_USER })
      }
    }
  }, [])

  return (
    <>
      <Header />
      <Input 
        handleUserSearch={handleUserSearch} 
        isLoading={state.loading}
        error={state.error}
      />
      {state.loading ? (
        <ProfileCardLoading />
      ) : (
        !!Object.keys(state.user).length && <ProfileCard {...state.user} />
      )}
    </>
  )
}
