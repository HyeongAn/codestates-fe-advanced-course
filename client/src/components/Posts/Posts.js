import React from 'react'
import loadingImg from '../../assets/thinking.png'
import {useNavigate} from 'react-router-dom'
import {
    ContentWrap, Content,
    SpanWrap,ImageWrap,
    } from './styled'

function Posts ({info}){
    const navigate = useNavigate();

    function handleGetId (e) {
        navigate('/detail', {state : {ContentId : e.currentTarget.id}})
    }
    
    return (
        <ContentWrap>
            {
                info.length !== 0 ? info.map((data, idx)=> {
                    return (
                        <Content 
                            key={idx}
                            id={data.id} 
                            onClick={(e)=> handleGetId(e)}>
                            <SpanWrap subject="no">{data.id}</SpanWrap>
                            <SpanWrap subject="title">{data.title}</SpanWrap>
                            <SpanWrap subject="no">{data.userId}</SpanWrap>    
                        </Content>
                )})
                :  (    
                    <ImageWrap>
                        <img src={loadingImg} alt="loadingImg"/>
                        <span>Loading...</span>
                    </ImageWrap> 
                )    
            }
        </ContentWrap>
    )
}

export default Posts;