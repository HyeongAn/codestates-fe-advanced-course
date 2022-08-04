import { HashRouter, Route } from "react-router-dom";
import Main from '../../pages/MainPage/MainPage'
import Detail from '../../pages/PostDetail/PostDetail'

function Body (){
    return (
        <div>
            <HashRouter>
                <Route path="/" element={<Main/>}/>
                <Route path="/detail" element={<Detail/>}/>
            </HashRouter>
        </div>
    )
}
export default Body;