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

    // falando que ele aceita text, password, date, email e number em string
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'

    // boolean
    obrigatorio?: boolean
}

const CampoTexto = ({ 
        aoAlterado, 
        label, 
        placeholder, 
        valor,
        obrigatorio = false, tipo = 'text' // valor inicial do obrigatorio é false e do tipo é text
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
                type={tipo}
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto