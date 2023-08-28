import { useState } from "react";

function Form() {

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(`O usuário ${name} foi cadastrado com a senha: ${password}`);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return(
        <>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Insira o seu nome"
                    onChange={(e) => setName(e.target.value)}
                />
                </div>
                <div>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Insira a sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <input type="submit" placeholder="cadastrar"/>
            </form>
        </>
    )
}

export default Form;