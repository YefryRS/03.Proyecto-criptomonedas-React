import styled from '@emotion/styled'
import React from 'react'

const ParrafoResultado = styled.div`
    color: #FFF;
    font-family: "Lato", sans-serif;
    margin-top: 25px;
    @media (min-width: 900px) {
      display: flex; 
      align-items: center;
      gap: 1rem;
    }
`

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
  margin-top: 10px;
`
const Precio = styled.p`
  font-size: 27px;
  span {
    font-weight: 700;
  }
  margin-bottom: 30px;
`
const Imagen = styled.img`
  height: 150px;
`

const Resultado = ({resultado}) => {

const {PRICE,LASTUPDATE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL} = resultado

  return (
    <ParrafoResultado>
        <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="Imagen Critomoneda elegida" />
        <div className='contenedor-cotizacion'>
          <Precio>El precio es de: <span>{PRICE}</span></Precio>
          <Texto>El precio mas alto del dia fue: <span>{HIGHDAY}</span></Texto>
          <Texto>El precio mas bajo del dia fue de: <span>{LOWDAY}</span></Texto>
          <Texto>variacion las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
          <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
    </ParrafoResultado>
  )
}

export {Resultado}
