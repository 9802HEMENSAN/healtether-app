import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
 
 

function App() {
  return (
    <Box  minW = '280px' className="App" color = 'black' fontFamily={"Open Sans"} fontSize={"16px"}> 
      <Navbar />
      <Box   w ={"100%"}>
         <MainBody/>
         <Footer/>
      </Box>
    </Box>
  );
}

export default App;
