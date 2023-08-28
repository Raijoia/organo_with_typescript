import { ReactElement } from 'react';
import './Botao.css';

interface BotaoProps {
    // aceita reactelement ou string
    children: ReactElement | string
}

const Botao = (props: BotaoProps) => {
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao