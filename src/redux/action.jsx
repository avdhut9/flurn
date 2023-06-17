import {pokemonstate,searchbyability,searchbymove,searchbypokemon,name} from "./type"
export let pokeaction=(payload)=>{
return{
    type:pokemonstate,
    payload
}
}
export let pokemon={type:searchbypokemon,payload:"pokemon"};
export let ability={type:searchbyability,payload:"ability"};
export let move={type:searchbymove,payload:"move"}
export let nameof=(name)=>{
return{
    type:name,payload:name
}
}