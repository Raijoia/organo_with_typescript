import './ListaSuspensa.css'

interface ListaSuspensaProps {
    // especificando function
    aoAlterado: (valor: string) => void
    label: string
    obrigatorio: boolean
    valor: string

    // lista de strings
    itens: string[]
}

const ListaSuspensa = ({
    aoAlterado,
    label,
    valor,
    itens,
    obrigatorio
}: ListaSuspensaProps) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select
                onChange={(evento) => aoAlterado(evento.target.value)}
                required={obrigatorio}
                value={valor}
            >
                <option value=""></option>
                {itens.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa