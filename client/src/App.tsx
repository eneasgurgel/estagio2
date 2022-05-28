import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import moment from 'moment';
import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate
} from "react-router-dom";
import './App.css';
import Application from './components/application/application';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import checkLogin from './utils/loginChecker';



function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  moment.locale('PT-BR')
  return (
    <div className='App'>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline/>

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/home' element={<RequireAuth redirectTo="/login">
            <Application></Application>
          </RequireAuth>}></Route>
        </Routes>
        </BrowserRouter>
      
      </ThemeProvider>

    </div>
  );
}

function RequireAuth({children, redirectTo}:any){
    let isAuth = checkLogin()
    console.log(isAuth)
    return isAuth ? children : <Navigate to={redirectTo}/>
}

export default App;
