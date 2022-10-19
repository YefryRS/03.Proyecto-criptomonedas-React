import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: "lato", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    border: none;
`

const useSelectMonedas = (label,opciones) => {

    // Le colocamos un nombre tan generico ya que al hace parte de nuestro propio hook y podemos reutilizarlo
    const [state, setState] = useState("")

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">Seleccione</option>

                {opciones.map(opcion => (
                    <option key={opcion.id} value={opcion.id}> 
                        {opcion.nombre}
                    </option>
                ))}

            </Select>
        </>
    )

    return [state, SelectMonedas]
}

export {useSelectMonedas}