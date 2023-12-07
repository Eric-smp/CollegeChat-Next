import styled from 'styled-components'
import {TParameterButton} from '@/types'

export const Content = styled.div`
width: auto;
height: 100%;
`

export const ButtonStyle = styled.button<TParameterButton>`
height: auto;
width: auto;
border: 2px solid ${(props)=> props.colorBorder};
border-radius: 25px;
padding: 0.5rem 1rem;
background-color: ${(props) => props.backColor};

.label{
    color: ${(props) => props.color};
}

`