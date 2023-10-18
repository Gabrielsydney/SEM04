export default function Pessoa(props){

    const { nome,sobrenome,cpf,telefone,email } = props;
    return(
        <>
        <h2>Nome: {nome}</h2>
        <h2>Sobrenome: {sobrenome}</h2>
        <h2>CPF: {cpf}</h2>
        <h2>Telefone: {telefone}</h2>
        <h2>Email: {email}</h2>
        </>
    )
}