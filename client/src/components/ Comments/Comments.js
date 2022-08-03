import React from 'react';
import Profile from '../../assets/basicProfile.webp';
import {
    CommentSection, CommentTitle,
    CommentWrap, Comment,
    CommentPIC, CommentName, 
    CommentBody,CommentBodyWrap
    } from './styled'

function Comments ({comments}){
    
    return (
        <CommentSection>
            <CommentTitle>
                <h2>Comments</h2>
            </CommentTitle>
            <CommentWrap>
                {
                    comments.map((comment, idx) => {
                        return (
                            <Comment key={idx}>
                                <CommentPIC>
                                    <img src={Profile} alt="profileImg"/>
                                    <CommentName>
                                        <p>{comment.name}</p>
                                        <span>{comment.email}</span>
                                    </CommentName>
                                </CommentPIC>
                                <CommentBodyWrap>
                                    <CommentBody>
                                        {comment.body}
                                    </CommentBody>
                                </CommentBodyWrap>
                            </Comment>
                        )
                    })
                }
            </CommentWrap>
        </CommentSection>
    )
}

export default Comments;