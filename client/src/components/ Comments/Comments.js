import React from 'react';
import Profile from '../../assets/basicProfile.webp';
import {
    CommentSection, CommentTitle,
    CommentWrap, Comment,
    CommentPIC, CommentInfo,
    CommentName, CommentBody,
    CommentBodyWrap
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
                                </CommentPIC>
                                <CommentInfo>
                                    <CommentName>
                                        <p>{comment.name}</p>
                                        <span>{comment.email}</span>
                                    </CommentName>
                                    <CommentBodyWrap>
                                        <CommentBody>
                                            {comment.body}
                                        </CommentBody>
                                    </CommentBodyWrap>
                                </CommentInfo>
                            </Comment>
                        )
                    })
                }
            </CommentWrap>
        </CommentSection>
    )
}

export default Comments;