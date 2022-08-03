import React from "react"
import useLocalStorage from "../../Hooks/useLocalStorage"
import {
    PageSection, ButtonWrap,
    Button
    } from './styled'

function Pagination ({page, totalPosts, limit, setPage}){
    const numPages = Math.ceil(totalPosts/limit)
    const [currPage, setCurrPage] = useLocalStorage("currPage", page)
    let firstNum = currPage - (currPage % 5) + 1
    let lastNum = currPage - (currPage % 5) + 5
    console.log({"currPage is":currPage, "firsNum is" : firstNum, "page is" : page})

    return (
        <PageSection>
            <ButtonWrap>
                <Button 
                    onClick={() => {setPage(page-1); setCurrPage(page-2);}} 
                    disabled={page===1}>
                    &lt;
                </Button>
                <Button 
                    onClick={() => setPage(firstNum)}
                    aria-current={page === firstNum ? "page" : null}>
                    {firstNum}
                </Button>
                {
                    Array(3).fill().map((_, i) =>{
                        return (
                            <Button
                                border="true" 
                                key={i+1} 
                                onClick={() => {setPage(firstNum+1+i)}}
                                aria-current={page === firstNum+1+i ? "page" : null}>
                                {firstNum+1+i}
                            </Button>
                        )
                    })}
                    {
                        <Button
                            border="true" 
                            key ={lastNum+1}
                            onClick={() => setPage(lastNum)}
                            aria-current={page === lastNum ? "page" : null}>
                            {lastNum}
                        </Button>
                    }
                <Button 
                    onClick={() => {setPage(page+1); setCurrPage(page);}} 
                    disabled={page===numPages}>
                    &gt;
                </Button>
            </ButtonWrap>
        </PageSection>
    )
}

export default Pagination;
