import { Box } from "@chakra-ui/react"
import { MdMovie } from 'react-icons/md'
import { Heading } from '@chakra-ui/react'

import styled from "styled-components"
export default function Curso(props){
    return(
        <CardCurso>
            <h2>{props.nome}</h2>
            <Box boxShadow='lg' p='6' rounded='sm' bg='white'>
                <CardWrap>
                <MdMovie size={35} />
                <Heading as="h4" size="sm">I'm a Heading</Heading>
                </CardWrap>
            </Box>
        </CardCurso>
    )
}

const CardCurso = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 200px;
    margin-bottom: 5px;
    margin-right: 10px;
    cursor: pointer;
` 

const CardWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`