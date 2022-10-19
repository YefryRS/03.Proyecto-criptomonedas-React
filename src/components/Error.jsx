import styled from '@emotion/styled'
import React from 'react'

const Div = styled.div`
    color: #FFF;
    font-weight: bold;
    border: white solid;
    border-radius: 5px;
    padding: 15px;
    text-align: center;
    background-color: #B7322C;
    text-transform: uppercase;
    font-size: 22px;
    font-family: "Lato", sans-serif;
`

const Error = ({children}) => {
  return (
    <Div>
      {children}
    </Div>
  )
}

export {Error}
