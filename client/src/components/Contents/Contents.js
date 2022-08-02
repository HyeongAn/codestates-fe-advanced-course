import React from 'react'
import {
        ContentSection, TitleWrap,
        Title, UserId, ContentWrap,
        Matter
} from './styled'

function Content({contents}) {
    //console.log(contents)
    return (
        <ContentSection>
            <TitleWrap>
                <Title>{contents.title}</Title>
                <UserId>작성자 : {contents.userId}</UserId>
            </TitleWrap>
            <ContentWrap>
                <Matter>
                    {contents.body}
                </Matter>
            </ContentWrap>
        </ContentSection>
    )

}

export default Content;