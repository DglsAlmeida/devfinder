import { useCallback, useReducer } from "react"
import { api } from "../services/api"
import { UserActionTypes, UserGithubProfile, UserState } from "../types/home/types"

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

export const useFindGithubUser = () => {
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

  return {
    handleUserSearch,
    user: state.user,
    error: state.error,
    loading: state.loading,
  }
}
