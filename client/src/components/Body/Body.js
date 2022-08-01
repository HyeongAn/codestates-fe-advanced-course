import { Routes, Route, Navigate } from "react-router-dom";
import Main from '../../pages/MainPage/MainPage'
import Detail from '../../pages/PostDetail/PostDetail'

function Body (){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </div>
    )
}
export default Body;