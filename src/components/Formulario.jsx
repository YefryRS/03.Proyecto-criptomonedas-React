import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { monedas } from '../data/monedas'
import { useSelectMonedas } from '../hooks/useSelectMonedas'
import { Error } from './Error'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {

  const [error, setError] = useState(false)
  const [critpos, setCritpos] = useState([])
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda",monedas)
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas("Elige tu Criptomoneda",critpos)

  useEffect(() => {

    const consultarAPI = async() => {

      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
      const respuesta  = await fetch(url)
      const resultado = await respuesta.json()
      const arrayCriptos = resultado.Data.map( cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto
      })

      setCritpos(arrayCriptos)
      
    }

    consultarAPI();
  },[])

  const handlesubmit = e => {
    e.preventDefault()
    if([moneda,criptomoneda].includes("")) {
      setError(true)
      return
    }

    setError(false)
    setMonedas({
      moneda,
      criptomoneda
    })
  }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios </Error>}
      <form onSubmit={handlesubmit} className="formulario-item"> 
      
        <SelectMonedas/>
        <SelectCriptomoneda/>
        <InputSubmit type="submit" value="cotizar" />
      </form>
    </>
  )
}

export {Formulario}
