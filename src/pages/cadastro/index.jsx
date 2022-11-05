import { Button } from "react-bootstrap"
import "./cadastro.css"
import React, { useState } from "react"

const Cadastro = () =>{

  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [senha, setSenha] = useState("")
  const usuario = {
    id: 0,
    nome: nome,
    cpf: cpf,
    email: email,
    senha: senha
  }

  const submit = async (e) => {
    e.preventDefault()
    try {
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario)
      }
      const response = await fetch("http://localhost:8080/cadastrar", config)
      if (response.ok) {
        alert("Cadastro Realizado")
    
      } 
    } catch (error) {

      console.log(error)
    }
  }
    return (
      <div id="cad">
        <form className="cads" onSubmit={submit}>
          <h2 className="titulo-login">Cadastrar</h2>

          <div className="place">
            <label>Email</label>
            <input type={"email"}
              name="email"
              id="email"
              placeholder="Email@exemplo.com"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="place">
            <label>Nome</label>
            <input type={"text"}
              name="name"
              id="name"
              placeholder="Digite seu nome"
              onChange={(e) => setNome(e.target.value)}
            ></input>
          </div>

          <div className="place">
            <label>CPF</label>
            <input type={"number"}
              name="cpf"
              id="cpf"
              placeholder="XXX.XXX.XXX-XX"
              onChange={(e) => setCpf(e.target.value)}

            ></input>
          </div>
          <div className="place">
            <label>Senha</label>
            <input type={"password"}
              name="password"
              id="password"
              placeholder="******"
              onChange={(e) => setSenha(e.target.value)}
            ></input>
          </div>
          <div className="actions">
            <Button type="submit" className="btn-register">CADASTRAR</Button>
          </div>
          <div className="cad">
          </div>
        </form>
      </div>
    
       
    )
}

export default Cadastro

