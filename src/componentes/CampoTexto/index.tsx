import './CampoTexto.css'
import React from 'react';

// definindo as props
interface CampoTextoProps {
    // dizendo que a prop é uma função com o valor do parâmetro string
    aoAlterado: (valor: string) => void

    // strings
    placeholder: string
    label: string
    valor: string

    // boolean
    obrigatorio: boolean
}

const CampoTexto = (props: CampoTextoProps) => {

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto