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

const CampoTexto = ({ 
        aoAlterado, 
        label, 
        obrigatorio, 
        placeholder, 
        valor 
    }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto