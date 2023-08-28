import './Banner.css';
import React from 'react';

// declarando props necessarias e o tipo que aceitam
interface BannerProps {
    enderecoImagem: string
    // ? deixa a prop opcional, pode ou não passar
    textoAlternativo?: string
}

// desestrutura e torna em variavel os requisitos bannerProps
export const Banner = ({ enderecoImagem, textoAlternativo } :BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={enderecoImagem} alt={textoAlternativo}/>
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
        </header>
    )
}

export default Banner