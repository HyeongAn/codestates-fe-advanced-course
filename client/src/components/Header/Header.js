import React from 'react'
import image from '../../assets/codeStatesImg.png'
import {HeaderSection, ImgWrapper} from './styled'

function Header () {

    return (
        <HeaderSection>
            <ImgWrapper to='/' onClick={() => {window.localStorage.clear(); window.location.reload();}}>
                <img src={image} alt="header img"/>
            </ImgWrapper>
        </HeaderSection>
    )
}

export default Header;