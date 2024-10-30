import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header.tsx";
import {Home} from './components/Home.tsx';
import {List} from "./components/List.tsx";
import {ModifyDetails} from "./components/ModifyDetails.tsx";

export const App = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/resources' element={<List/>}/>
                <Route path='/add-resource' element={<ModifyDetails/>}/>
                <Route path='/edit-resouce/:id' element={<ModifyDetails/>}/>
            </Routes>
        </BrowserRouter>

    )
}