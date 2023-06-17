import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from '@chakra-ui/icons'
import ApexChart from "apexcharts"
import ReactApexChart from "react-apexcharts";
const breakpoints={
    base:"column",
    sm:"coloumn",
    md:"row",
    lg:"row"
}

export default function DetailsPage(){
let locallysave=JSON.parse(localStorage.getItem("bookmark"))||[]
console.log("render")

const[bookmark,setbookmark]=useState(locallysave)
    const[state,setstate]=useState({})
    const[data,setdata]=useState("about")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const[loading,setloading]=useState(false)
    let y=state?.data?.types?.[0].type?.name
 let x=y=="grass"?"green.500":y=="bug"?"yellow.500":y=="water"?"blue.500":y=="rock"?"gray.500":y=="electric"?"orange.500":y=="poison"?"pink.500":y=="flying"?"teal.500":y=="ground"?"blackAlpha.500":y=="fighting"?"rgb(255,192,9)":y=="ice"?"rgb(93,179,192)":y=="psychic"?"purple.500":y=="ghost"?"rgb(152,179,206)":y=="steel"?"rgb(185,196,212)":y=="dragon"?"rgb(218,10,54)":y=="dark"?"rgb(114,127,148)":y=="fairy"?"rgb(229,207,254)":y=="fire"?"red.500":"Tomato"
    console.log(state)
    const {id}=useParams()
    console.log(id)
    const data1={
        series: [{
            data: state?.data?.stats?.map((ele)=>ele?.base_stat)
          }],
          options: {
            chart: {
              type: 'bar',
              height:10,
              selection: {
                enabled: false
              },toolbar:{
                  show:false
              }
            },
            plotOptions: {
              bar: {
                borderRadius: 1,
                horizontal: true,
                barHeight: '50%',
                columnHeight: '1%',
               
              }, dataLabels: {
                enabled: false
              },
            },
          
            xaxis: {
              labels:{
                show:false
              },axisBorder:{
                show:false
              },
              categories: state?.data?.stats?.map((ele)=>ele?.stat?.name)
            },theme: {
                monochrome: {
                  enabled: true,
                  color:x=="blue.500"?"#ff4d33":'#255aee',
                  shadeTo: 'light',
                  shadeIntensity: 0.65
                }
              }
            
          }
         
        
        
        };
    
 useEffect(()=>{
    console.log("ok")
getdata();

 },[])

 async function getdata(){
  
try{
  setloading(true)
let pokemondetail=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
setstate({...pokemondetail})
setloading(false)
}catch(e){
console.log(e)
}
 }
 function saveOrRemove(id){
let x=bookmark?.find((ele)=>{
    return ele?.id==Number(id)
});


if(x){
    let y=bookmark?.filter((ele)=>{
        return ele.id!==Number(id)
    })
  
   localStorage.setItem("bookmark",JSON.stringify(y))
  setbookmark(y)

    
}else{

    localStorage.setItem("bookmark",JSON.stringify([...bookmark,state?.data]))
    setbookmark([...bookmark,state?.data])
}
console.log(typeof(id))
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
        <Box bgColor={x} h="100vh" pt="50px">
{loading?<Box><Image w="100%" h="100vh" m="auto" src="https://cdn.dribbble.com/users/2082457/screenshots/5734390/pokeball.gif"/></Box>:<Box bgColor={x} h="100vh" pt="50px" display="flex" justifyContent="center" alignItems="center" flexDirection={breakpoints}   gap="30px"   backgroundPosition="center"
       backgroundRepeat="no-repeat" background-size="cover" >
<Box  position="relative" >
    {/* <Text color="white" fontSize="30px">{state?.data?.species?.name}</Text> */}
<Image w="80%" m="auto"  src={state?.data?.sprites?.other?.home?.front_default}/>
<Box display="flex" justifyContent="center" alignItems="center">
     <Text textAlign="center" color="white" fontSize="50px">{state?.data?.species?.name}</Text>
     <StarIcon position="absolute" top="100px" right="20px" onClick={()=>saveOrRemove(state?.data?.id)} cursor="pointer" color={color(state?.data?.id)} boxSize="10"/>
</Box>
</Box>

<Box m="auto"   >
   <Box display="flex" gap="20px" p="20px">
   <Button onClick={()=>setdata("about")}>About</Button>
   <Button onClick={()=>setdata("base")}>Base Stats</Button>
 
   {/* <Button onClick={()=>setdata("move")}>Moves</Button> */}
   <Button ref={btnRef}  onClick={onOpen}>
        moves
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        bgColor={x}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="white" bgColor={x}>moves</DrawerHeader>

          <DrawerBody color="white" bgColor={x}>
           {state?.data?.moves?.map((ele)=>
           <Text>{ele?.move?.name}</Text>)}
          </DrawerBody>

         
        </DrawerContent>
      </Drawer>
   </Box>
   <Box>
   {data=="about"?<Box color="white" justifyContent="center"  h="100%" p="20px" display="flex" flexDirection="column" gap="20px">
    <Text fontWeight="bold" fontSize="20px">species: {state?.data?.species?.name}</Text>
    <Text fontWeight="bold" fontSize="20px">Height : {state?.data?.height}</Text>
    <Text fontWeight="bold" fontSize="20px">weight: {state?.data?.weight}</Text>
    <Text fontWeight="bold" fontSize="20px">abilities: <Text display="inline-block"><Text display="flex" gap="3px">{state?.data?.abilities?.map((ele,i)=>
    <Text fontWeight="bold"fontSize="20px">{ele?.ability?.name},</Text>)}</Text></Text></Text>
    </Box>:data=="base"?<Box>
        <Box><ReactApexChart options={data1.options} series={data1.series} type="bar"  height={200}/></Box>
</Box>:<Box></Box>}
   </Box>
    </Box>
</Box>}
        </Box>
    )
}