import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <div className='App'>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline/>

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
        </BrowserRouter>
      
      </ThemeProvider>

    </div>
  );
}

export default App;
