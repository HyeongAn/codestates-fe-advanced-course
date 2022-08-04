import React, { useState, useEffect } from 'react';
import {REACT_APP_API_URL} from '../../config'
import useLocalStorage from '../../Hooks/useLocalStorage'
import axios from 'axios';
import Pagenation from '../../components/Pagination/Pagination'
import Posts from'../../components/Posts/Posts'
import {
    MainSection, SubjectWrap,
    Subject, BoardWrap,
    Board, ContentTitle,
} from './styled'

function MainPage () {

    const [contentInfo, setContentInfo] = useState([]);
    const [page, setPage] = useLocalStorage("page", 1);
    const limit = 10;
    const offset = (page-1)*limit;
    
    async function handlePostInfo(){
        
        const result = await axios({
            url : `${REACT_APP_API_URL}/posts`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        setContentInfo(result.data.reverse())
    }

    /* Pagenation을 위한 코드 추가 */
    const postsData = (posts) => {
        if(posts){
            let result = posts.slice(offset, offset + limit);       
            return result;
        }
    }
    
    useEffect(() =>{
        handlePostInfo()
    },[])   

    return (
        <MainSection>
            <SubjectWrap>
                <Subject>게시판</Subject>
            </SubjectWrap>
            <BoardWrap>
                <Board>
                    <ContentTitle>
                        <span>No.</span>
                        <span>제목</span>
                        <span>작성자</span>
                    </ContentTitle>
                    <Posts info ={postsData(contentInfo)}/>
                    <Pagenation limit={limit} page={page} totalPosts={contentInfo.length} setPage={setPage}/>
                </Board>
            </BoardWrap>
        </MainSection>
    )
}

export default MainPage