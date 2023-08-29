import { IColaborador } from '../../shared/interfaces/IColaborador'
import Colaborador from '../Colaborador'
import './Time.css'

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string

    // definindo que é uma array, como usaremos no projeto inteiro, tem um arquivo com a interface da array
    colaboradores: IColaborador[] // [] => indica que é uma lista 
}

const Time = ({ colaboradores, corPrimaria, nome, corSecundaria }: TimeProps) => {
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => 
                <Colaborador 
                    corDeFundo={corPrimaria} 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    data={colaborador.data}
                /> )}
            </div>
        </section> 
        : <></>
    )
}

export default Time