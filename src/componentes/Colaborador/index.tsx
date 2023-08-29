import './Colaborador.css'

interface ColaboradorProps {
    nome: string
    imagem: string
    cargo: string
    corDeFundo: string
    data: string
}

const Colaborador = ({ nome, imagem, cargo, corDeFundo, data }: ColaboradorProps) => {
    const dataDefault = new Date(data)
    dataDefault.setDate(dataDefault.getDate() + 1)

    return (
        <div className="colaborador">
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                {/* toLocaleDateString => formata a data conforme a localização do meu computador */}
                <h5>{dataDefault.toLocaleDateString("pt-BR")}</h5>
            </div>
        </div>
    )
}

export default Colaborador