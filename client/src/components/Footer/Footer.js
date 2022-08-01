import React from 'react'
import image from '../../assets/codeStatesImg.png'
import {
    FooterSection, Wrapper,
    ImgWrapper, Copyrights,
    LinkWrap, MylinkWrap, MyLink
        } from './styled'


function Footer(){
    return (
        <FooterSection>
            <Wrapper>
                <ImgWrapper>
                    <img src={image} alt="Footer Img"/>
                </ImgWrapper>
                <Copyrights>
                    <span>
                        주식회사 코드스테이츠 | 사업자번호 : 123-45-67890 | 대표자명 : 짱짱맨 <br/>
                        서울특별시 서초구 서초대로 123, 강남에 있는 빌딩 1층
                    </span>
                </Copyrights>
                <LinkWrap>
                    <MylinkWrap>
                        <MyLink border="right" href="https://github.com/HyeongAn">GitHub</MyLink>
                        <MyLink border="right" href="https://velog.io/@ahsy92">Blog</MyLink>
                        <div>guddks84@gmail.com</div>
                    </MylinkWrap>
                    <span>구글 크롬에 최적화되어 있습니다.</span>
                </LinkWrap>
            </Wrapper>
        </FooterSection>
    )
}

export default Footer;