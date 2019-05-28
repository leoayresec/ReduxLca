import Api from "../../config/api";

export const SET_REPOS = 'SET_REPOS';
export const SET_NOME = 'SET_NOME';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';

export const setRepos = (repos) => ({
  type: SET_REPOS,
  payload: repos
})

export const setName = (nome) => ({
  type: SET_NOME,
  payload: nome
})

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: isFetching
})

export function getRepos () {
  return function fetching (dispatch, getState) {
    dispatch(setIsFetching(true))
    const {nome} = getState().repoReducer
    console.log(getState())
    Api.get(`users/${nome}/repos`)
      .then(response => {
        dispatch(setRepos(response.data))
        dispatch(setIsFetching(false))
      })
      .catch(error => {
        dispatch(setIsFetching(false))
        console.log("Erro", error)
      })
  }
}