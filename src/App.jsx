import { useEffect, useState } from 'react'
import styled from "@emotion/styled" // Con esto podremos hacer un styled component, los styled components tenemos que escribirlos por fuera de los componentes
import imgCryto from "./img/imagen-criptos.png"
import { Formulario } from './components/Formulario'
import { Resultado } from './components/Resultado'
import { Spinner } from './components/Spinner'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 100%;
  display: block;
  margin: 100px auto 0 auto;
`

const Heading = styled.h1`
  color: #FFFFFF;
  font-family: "lato", sans-serif;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  } 
`


function App() {
  
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false) // De esta forma mostraremos en nuestra app  "cargando..." mientras se renderiza nuestra pagina. Esto nos sirve en cualquier proyecto de React

  //Cotizacion de la moneda y criptomoneda
  useEffect(() => {
    if(Object.keys(monedas).length > 0) {

      const cotizarCripto = async () => {
        setCargando(true)

        const {criptomoneda,moneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        
        setResultado(resultado.DISPLAY[criptomoneda][moneda]) // De esta forma puedo acceder de forma dinamica al objeto, al acceder mediante los "[]" en vez del ".", permito que me tome en cuenta las variables
          setCargando(false)
      }

      cotizarCripto()
    }
  },[monedas])

  console.log(resultado)


  return (
    <div>
      <Contenedor>
        <div className='contenedor-img'>
          <Imagen
            src={imgCryto}
            alt="Imagenes criptomonedas"
          />
        </div>

        <div className='formulario'>
          <Heading>Cotiza criptomonedas al instante</Heading>
          <Formulario
            setMonedas={setMonedas}
          />
          {cargando && <Spinner/>}
          {
            Object.keys(monedas).length > 0 && 
              <Resultado 
                resultado={resultado}
              />
          }
        </div>
      </Contenedor>
    </div>
  )
}

export default App
