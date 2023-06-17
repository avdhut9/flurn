import { Box, Button, Heading, Input, Text, useBreakpointValue, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {pokeaction,ability,move,pokemon,nameof} from "../redux/action"
import { useNavigate } from "react-router-dom";
const breakpoints={
  base:"repeat(1,1fr)",
  sm:"repeat(2,1fr)",
  md:"repeat(3,1fr)",
  lg:"repeat(3,1fr)"
}
export default function SearchPokemon(){
   const {pokemonstate,loading,error,type}=useSelector((state)=>state.pokereducer)
   const toast = useToast()
   const dispatch=useDispatch()
   const navigate=useNavigate()
   const[input,setinput]=useState("")
   const[searchby,setsearchby]=useState("Search by pokemon")
   const ref=useBreakpointValue({base:"https://img3.wallspic.com/crops/5/2/1/7/5/157125/157125-pikachu-light-toy-rabbit-building-1080x1920.jpg",lg:"https://img3.wallspic.com/crops/8/0/2/2/3/132208/132208-video_games-logo-ball-games-pikachu-1920x1080.jpg"})
async function search(){
try{
if(searchby=="Search by pokemon"){
  
let pokemon1=await axios.get(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)

if(pokemon1){
    dispatch(pokemon)
    dispatch(pokeaction(pokemon1))
return navigate("/list")
}
}else if(searchby=="Search by ability"){

let pokemon1=await axios.get(`https://pokeapi.co/api/v2/ability/${input.toLowerCase()}?limit=10`)

if(pokemon1){
  dispatch(nameof(input))
    dispatch(ability)
    dispatch(pokeaction(pokemon1))
return navigate("/list")
}
}else if(searchby=="Search by move"){

  let pokemon1=await axios.get(`https://pokeapi.co/api/v2/move/${input.toLowerCase()}?limit=10`)
  
  if(pokemon1){
    dispatch(nameof(input))
      dispatch(move)
      dispatch(pokeaction(pokemon1))
  return navigate("/list")
  }
  }
else{

}
}catch(e){
    toast({
        title: 'pokemon not found.',
       
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
}

}
function change(e){
    setinput(e.target.value)
}

    return(
       <Box w="100%" h="100vh" backgroundImage={ref}   backgroundPosition="center" 
       backgroundRepeat="no-repeat" background-size="cover"  display="flex" justifyContent="center" alignItems="center">
     
            <Box w="80%" mt="30px" m="auto">
        
           <Heading color="white" >What Pokemon</Heading>
            <Heading color="white">are you looking for?</Heading>
          <Box display="flex" mt="30px">
          <Input  value={input} onChange={change}  placeholder={searchby} bgColor="white"/>
           <Button isDisabled={input==""} onClick={search} >Search</Button>
          </Box>
          <Box pt="30px" w="70%" m="auto" display="grid" gridTemplateColumns={breakpoints} justifyContent="center" gap="10px"  >
            <Button isDisabled={searchby=="Search by pokemon"} onClick={()=>setsearchby("Search by pokemon")}><Text >Search by pokemon</Text></Button>
            <Button isDisabled={searchby=="Search by ability"} onClick={()=>setsearchby("Search by ability")}><Text>Search by ability</Text></Button>
            <Button isDisabled={searchby=="Search by move"} onClick={()=>setsearchby("Search by move")}><Text>Search by move</Text></Button>
          </Box>
        
           </Box>
  
       </Box>
    )
}