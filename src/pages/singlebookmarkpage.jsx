import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";

export default function SingleBookmarkPage({ele}){
   
    let y=ele?.types?.[0].type?.name
    let x=y=="grass"?"green.500":y=="bug"?"yellow.500":y=="water"?"blue.500":y=="rock"?"gray.500":y=="electric"?"orange.500":y=="poison"?"pink.500":y=="flying"?"teal.500":y=="ground"?"blackAlpha.500":y=="fighting"?"rgb(255,192,9)":y=="ice"?"rgb(93,179,192)":y=="psychic"?"purple.500":y=="ghost"?"rgb(152,179,206)":y=="steel"?"rgb(185,196,212)":y=="dragon"?"rgb(218,10,54)":y=="dark"?"rgb(114,127,148)":y=="fairy"?"rgb(229,207,254)":y=="fire"?"red.500":"Tomato"
    return(
        <Box  cursor="pointer"    p='6' rounded='md' bg='white'  boxShadow='lg' bgColor={x}>
<Image src={ele?.sprites?.other?.home?.front_default}/>
    <Text textAlign="center" color="white" fontSize="20px" fontWeight="bold">{ele?.name}</Text>
   
        </Box>
    )
}