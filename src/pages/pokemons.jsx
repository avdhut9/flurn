import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios"
import List1 from "./pokemonsingle.jsx";
const breakpoints={
    base:"repeat(2,1fr)",
    sm:"repeat(3,1fr)",
    md:"repeat(4,1fr)",
    lg:"repeat(4,1fr)"
}
export default function List(){
    const[state,setstate]=useState([])
   console.log(state)
    const[page,setpage]=useState(1)
    
    useEffect(()=>{
getdata()
    },[page])
    async function ok(){
        try{
            if (window.innerHeight + document.documentElement.scrollTop>=document.documentElement.scrollHeight) {
                setpage((pre)=>pre+1)
            
              }
        }catch(e){

        }
       }
    useEffect(()=>{
 
    window.addEventListener("scroll",ok)
    return()=>{
        
        window.removeEventListener("scroll",ok)
    }
       },[])
   async function getdata(){
try{
let res=await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${10*(page-1)}`)


setstate([...state,...res?.data?.results])
}catch(e){
console.log(e)
}
    }
    return(
<Box  bgColor="whiteAlpha.900" backgroundPosition="center" background-size="cover" pt="50px">
            <Box pt="20px" w="95%" m="auto" display="grid" gap="15px" justifyContent="center" gridTemplateColumns={breakpoints} >
{state.map((ele)=>
<Box>
    <List1 {...ele}/>
</Box>
)}
        </Box>
</Box>
    )
}