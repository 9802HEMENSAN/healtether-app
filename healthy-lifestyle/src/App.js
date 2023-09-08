 
import './App.css';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import MainRoutes from './routes/MainRoutes';
 
 

function App() {
  return (
    <Box  minW = '280px' className="App"  fontFamily={"Open Sans"} fontSize={"16px"}> 
         <MainRoutes/>
    </Box>
  );
}

export default App;
