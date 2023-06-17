import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import SearchPokemon from './pages/search';
import Allroutes from './routes/Allroutes';
import Navbar from './components/Navabr';

function App() {
  return (
   <Box>
    <Navbar/>
    <Allroutes/>
   </Box>
  );
}

export default App;
