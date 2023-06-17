import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import SingleBookmarkPage from "./singlebookmarkpage";
import { StarIcon } from "@chakra-ui/icons";
const breakpoints={
    base:"repeat(2,1fr)",
    sm:"repeat(3,1fr)",
    md:"repeat(4,1fr)",
    lg:"repeat(4,1fr)"
}
export default function Bookmarkpage(){
    let bookmarks=JSON.parse(localStorage.getItem("bookmark"))||[];
    const[bookmark,setbookmark]=useState(bookmarks)
    function saveOrRemove(id){
         let y=bookmark?.filter((ele)=>{
                return ele.id!==Number(id)
            })
          
           localStorage.setItem("bookmark",JSON.stringify(y))
          setbookmark(y)
        
            
     
        
    
         }
         function color(id){
            let x=bookmark?.find((ele)=>{
                return ele?.id==id
            });
            console.log(x,"inside colour")
            if(x){
                return "rgb(247,197,67)"
            }else{
                return "white"
            }
         }
    return(
        <Box display="grid" gridTemplateColumns={breakpoints} gap="15px" w="95%" m="auto" mt="15px" pt="50px" >
{bookmark?.map((ele)=>
<Box position="relative"  >
    {/* <Image src={ele?.sprites?.other?.home?.front_default}/>
    <Text textAlign="center" color="white" fontSize="20px" fontWeight="bold">{ele?.name}</Text> */}
    <SingleBookmarkPage ele={ele}/>
    <StarIcon position="absolute" top="10px" right="10px" onClick={()=>saveOrRemove(ele.id)} cursor="pointer" color={color(ele.id)} boxSize="7"/>
</Box>
)}
        </Box>
    )
}