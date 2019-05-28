import { SET_REPOS, SET_NOME, SET_IS_FETCHING } from "./action";

const initialState = {
    repos: [],
    nome: "",
    isFetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_REPOS:
            return { ...state, repos: action.payload };

        case SET_NOME:
            return { ...state, nome: action.payload };

        case SET_IS_FETCHING:
            return { ...state, isFetching: action.payload };
            
            
    default:
            return state
    }
};
