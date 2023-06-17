import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    IconButton,
    Image,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Select,
    Spacer,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
    VStack,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiMenu } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { GoLocation } from 'react-icons/go';
import {AiOutlineHeart } from 'react-icons/ai';
import {FiSearch } from 'react-icons/fi';
import {CgProfile } from 'react-icons/cg';
import {BiShoppingBag} from 'react-icons/bi';

   const Navbar= () => {

    const pc = useBreakpointValue({ base: false, lg: true, md:false,sm:false})
    const { isOpen, onOpen, onClose } = useDisclosure()
 let navigationx=useNavigate()
    const btnRef =React.useRef()
   function navigate(){
    console.log("oooo")
    return navigationx("/")
   }
    return (
      
        <Box textDecoration="none"   borderColor='red' as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')} bgColor="white" height="50px" display="flex" justifyContent={{lg:"center"}} alignItems="center" position="fixed" zIndex={1000} top="0px" w="100%"  >
       
        {pc ? (
                <Box textDecoration="none" textAlign="center" display="flex"  w="100%" color="rgb(114,127,148)" p="10px" >
       <Image cursor="pointer" onClick={navigate} w="200px" h="50px" src="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/a28e89b0-d546-486a-827b-7ef6634bd843"/>
                <Spacer/>
                  <ButtonGroup w="100%"  variant="link" display="flex" gap="10px" justifyContent="flex-end" alignItems="center" >
                  <Button variant="ghost"   _hover={{bgColor:"white"}}><Link  to={`/pokemons`}>Pokemons</Link></Button>
                  <Button variant="ghost"   _hover={{bgColor:"white"}}><Link  to={`/bookmarks`}>Bookmarks</Link></Button>
                  
                
                  

                 
                  </ButtonGroup>
                  <Spacer/>
    
               
                </Box>
              ) : (
               <Box color="rgb(114,127,148)" display="flex" justifyContent="space-between" w="100%" >
                 <IconButton
                onClick={onOpen}
                  icon={<FiMenu fontSize="1.25rem"  _hover={{bgColor:"white"}} />}
                  aria-label="Open Menu"
                  placement='left'
                  _hover={{bgColor:"white"}}
                  variant="ghost"
                  bgColor="white"
          
            
                />
              <Box cursor="pointer"  onClick={navigate}>  <Image w="150px" h="50px" src="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/a28e89b0-d546-486a-827b-7ef6634bd843"/></Box>
                  
               </Box>
               
              )}
            
   
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          
          
         
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton   _hover={{bgColor:"white"}} />
           
          
            <DrawerBody  >
              <VStack alignItems="flex-start">
           
           
           
                  <Button variant="ghost" onClick={onClose}   _hover={{bgColor:"white"}}><Link  to={`/pokemons`}>Pokemons</Link></Button>
                  <Button variant="ghost" onClick={onClose}  _hover={{bgColor:"white"}}><Link  to={`/bookmarks`}>Bookmarks</Link></Button>
                  
              
                
                  

                  
                
               
                
               
                
           
             </VStack>
            </DrawerBody>
  
           
          </DrawerContent>
        </Drawer>
         
        </Box>
      
    )
  }
  export default Navbar