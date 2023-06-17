import {pokemonstate,searchbypokemon,searchbyability,searchbymove,name} from "./type";
import {pokeaction,ability,move,pokemon,nameof} from "./action"
export const initialstate={
    pokemonstate:[],
    loading:false,
    error:false,
    type:"",
    name:""

}
export const pokereducer=(state=initialstate,action)=>{
switch(action.type){
    case pokemonstate :
        return{
            ...state,pokemonstate:action.payload
        };
        case searchbypokemon:
            return{
                ...state,type:action.payload
            };
            case searchbyability:
                return{
                    ...state,type:action.payload
                }
                case searchbymove:
                    return{
                        ...state,type:action.payload
                    };
                    case name:
                        return{
                            ...state,name:action.paylaod
                        }
        
        default:
            return state
}
}