import styles from './Pessoa.module.css';


function Pessoa({nome, idade, profissao, foto}) {
    return(
        <div className = {styles.pessoaContainer}>
            <img src={foto} alt={nome}/>
            <h1 className = {styles.pessoaContent}>Nome: {nome}</h1>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;