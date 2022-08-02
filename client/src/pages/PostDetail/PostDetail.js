import React, {useState, useEffect}from 'react';
import {useLocation} from 'react-router-dom';
import Contents from '../../components/Contents/Contents';
import Comments from '../../components/ Comments/Comments';
import axios from 'axios';
import {DetialSection} from './styled';
import {REACT_APP_API_URL} from '../../config';
import {ImageWrap} from'../../components/Posts/styled'
import loadingImg from '../../assets/thinking.png'

function Detail (){

    const location = useLocation().state.ContentId;
    const [contents, setContents] = useState();
    const [comments, setComments] = useState();
    
    async function handleGetContnets (){
        await axios({
            url : `${REACT_APP_API_URL}/posts/${location}`,
            method : 'GET',
            headers : {"Content-Type": "application/json"}
        }).then((result) => {
            setContents(result.data)
        }).catch((error) => console.log(error))

    };

    async function handleGetComments (){
        await axios({
            url : `${REACT_APP_API_URL}/posts/${location}/comments`,
            method : 'GET',
            headers : {"Content-Type": "application/json"}
        }).then((result) => {
            setComments(result.data)
        }).catch((error) => console.log(error))

    };

    useEffect(() =>{
        handleGetContnets()
        handleGetComments()
    }, [])


    return (
        <DetialSection>
            {
                contents !== undefined && comments !== undefined
                    ? (
                        <>
                            <Contents contents = {contents}/>
                            <Comments comments = {comments}/>
                        </>
                    )
                    : (
                        <ImageWrap>
                            <img src={loadingImg} alt="loadingImg"/>
                        </ImageWrap>
                    )
            }
           
        </DetialSection>
    )
}

export default Detail;
