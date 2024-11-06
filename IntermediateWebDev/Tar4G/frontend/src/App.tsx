// import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header.tsx";
import {Home} from './components/Home.tsx';
import {List} from "./components/List.tsx";
import {UpdateResource} from "./components/UpdateResource.tsx";
import {NewResource} from "./components/NewResource.tsx"
import {Box} from "@mui/material";

export const App = () => {

    return (
        <Box sx={{justifyContent: 'center'}}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/resources' element={<List/>}/>
                    <Route path='/add-resource' element={<NewResource />}/>
                    <Route path='/edit-resource/:id' element={<UpdateResource />}/>
                </Routes>
            </BrowserRouter>
        </Box>


    )
}