import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios"
import List1 from "./pokemonsingle.jsx";
import { useDispatch, useSelector } from "react-redux";
import{pokeaction} from "../redux/action.jsx"
import { Link } from "react-router-dom";
const breakpoints={
    base:"repeat(2,1fr)",
    sm:"repeat(3,1fr)",
    md:"repeat(4,1fr)",
    lg:"repeat(4,1fr)"
}
export default function Listbysearch(){
    
    
    const{pokemonstate:state,loading,error,type,name:input}=useSelector((state)=>state.pokereducer)
    const dispatch=useDispatch()
    const[slice,setslice]=useState(10)

    let y=state?.data?.types?.[0].type?.name
    let x=y=="grass"?"green.500":y=="bug"?"yellow.500":y=="water"?"blue.500":y=="rock"?"gray.500":y=="electric"?"orange.500":y=="poison"?"pink.500":y=="flying"?"teal.500":y=="ground"?"blackAlpha.500":y=="fighting"?"rgb(255,192,9)":y=="ice"?"rgb(93,179,192)":y=="psychic"?"purple.500":y=="ghost"?"rgb(152,179,206)":y=="steel"?"rgb(185,196,212)":y=="dragon"?"rgb(218,10,54)":y=="dark"?"rgb(114,127,148)":y=="fairy"?"rgb(229,207,254)":y=="fire"?"red.500":"white"
    useEffect(()=>{
window.addEventListener("scroll",scroll)
return()=>{
    window.removeEventListener("scroll",scroll)
}
    },[])
    async function scroll(){
       
if(window.innerHeight+document.documentElement.scrollTop>=document.documentElement.scrollHeight){
    setslice((pre)=>pre+10)

       
        }
    }
    return(
<Box  bgColor="whiteAlpha.900" backgroundPosition="center" background-size="cover" pt="50px">
            <Box  >
{type=="pokemon"?<Box  pt="20px" w="95%" m="auto" display="grid" gap="15px" justifyContent="center" gridTemplateColumns={breakpoints}>  <Link to={`/details/${state?.data?.id}`}> <Box className="green" cursor="pointer"   boxShadow='lg' p='6' rounded='md' bg='white' bgColor={x} backgroundRepeat="no-repeat" background-size="cover">
       {loading?<Box textAlign="center"><Spinner thickness='4px'
         speed='0.65s'
         emptyColor='gray.200'
         color='blue.500'
         size='xl'/></Box>:<Box><Image  src={state?.data?.sprites?.other?.home?.front_default}/><Text textAlign="center" color="white" fontSize="20px" fontWeight="bold">{state?.data?.name}</Text></Box>}
       
               </Box></Link></Box>:type=="ability"?<Box pt="20px"  w="95%" m="auto" display="grid" gap="15px" justifyContent="center" gridTemplateColumns={breakpoints} >{state?.data?.pokemon?.slice(0,slice)?.map((ele)=>
               <Box>
                <List1 {...ele.pokemon}/>
               </Box>
               )}</Box>:<Box pt="20px"  w="95%" m="auto" display="grid" gap="15px" justifyContent="center" gridTemplateColumns={breakpoints}>{state?.data?.learned_by_pokemon?.slice(0,slice)?.map((ele)=>
                <Box>
                    <List1 {...ele}/>
                    </Box>
               )}</Box>}
        </Box>
</Box>
    )
}