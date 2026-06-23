import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "../pages/Home";
import {Issues} from '../pages/Issues'


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="issues" element={<Issues/>}/>

            </Routes>
        </BrowserRouter>
    );
}