import React from 'react'
import loadingImg from '../../assets/thinking.png'
import {
    ContentWrap, Content,
    SpanWrap,ImageWrap
    } from './styled'

function Posts ({info}){
    
    return (
        <ContentWrap>
            {
                info !== undefined ? info.map((data, idx)=> {
                    return (
                        <Content key={idx}>
                            <SpanWrap subject="no">{data.id}</SpanWrap>
                            <SpanWrap subject="title">{data.title}</SpanWrap>
                            <SpanWrap subject="no">{data.userId}</SpanWrap>    
                        </Content>
                    )})
                : (
                    <ImageWrap>
                        <img src={loadingImg} alt="loadingImg"/>
                    </ImageWrap>
                )
            }
        </ContentWrap>
    )
}

export default Posts;