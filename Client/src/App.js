import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './AllRoutes/AllRoutes';
import Simple from './Components/Navbar';
import LargeWithLogoLeft from './Components/Footer';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box className="App" backgroundColor={"#f6f7f9"}>
      {/* <Simple/> */}
      <AllRoutes/>
      
     {/* <LargeWithLogoLeft/> */}
    </Box>
  );
}

export default App;
