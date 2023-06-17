import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List1({name}){
   const[state,setstate]=useState({})
   const[loading,setloading]=useState(false)
  
   
   useEffect(()=>{
    
getdata()
   },[])


  async function getdata(){
try{
    setloading(true)
let res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

setstate(res.data)
setloading(false)

}catch(e){

}

   }
   let y=state?.types?.[0].type?.name
   let x=y=="grass"?"green.500":y=="bug"?"yellow.500":y=="water"?"blue.500":y=="rock"?"gray.500":y=="electric"?"orange.500":y=="poison"?"pink.500":y=="flying"?"teal.500":y=="ground"?"blackAlpha.500":y=="fighting"?"rgb(255,192,9)":y=="ice"?"rgb(93,179,192)":y=="psychic"?"purple.500":y=="ghost"?"rgb(152,179,206)":y=="steel"?"rgb(185,196,212)":y=="dragon"?"rgb(218,10,54)":y=="dark"?"rgb(114,127,148)":y=="fairy"?"rgb(229,207,254)":y=="fire"?"red.500":"Tomato"

    return(
       <Link to={`/details/${state?.id}`}> <Box  cursor="pointer"   boxShadow='lg' p='6' rounded='md' bg='white' bgColor={x} backgroundRepeat="no-repeat" background-size="cover">
       {loading?<Box textAlign="center"><Spinner thickness='4px'
         speed='0.65s'
         emptyColor='gray.200'
         color='blue.500'
         size='xl'/></Box>:<Box><Image  src={state?.sprites?.other?.home?.front_default}/><Text textAlign="center" color="white" fontSize="20px" fontWeight="bold">{name}</Text></Box>}
       
               </Box></Link>
    )
}