import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id !== action.payload)
                
            }
        case FILTER:
            const filteredChars = state.allCharacters.filter(character => character.gender === action.payload);
            return {
                ...state,
                myFavorites: filteredChars
            }

        case ORDER:
            return {
                    ...state,
                    myFavorites:
                        action.payload === 'A'
                        ? state.allCharacters.sort((a, b) => a.id - b.id)
                        : state.allCharacters.sort((a, b) => b.id - a.id)
             }
        default:
            return {...state};
        }
    }

export default reducer;