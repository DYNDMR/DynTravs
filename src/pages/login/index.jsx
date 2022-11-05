import Header from "../../componentes/header"
import { Button } from "react-bootstrap"
import "./login.css"

const Login = () =>{

    return (
        
        <div id="cad">
        <form className="cads">
          <h2 className="titulo-login">Entrar</h2>

          <div className="place">
            <label>Email</label>
            <input type={"email"}
              name="email"
              id="email"
              placeholder="Email@exemplo.com"
            ></input>
          </div>
          <div className="place">
            <label>Senha</label>
            <input type={"password"}
              name="password"
              id="password"
              placeholder="******"
            ></input>
          </div>
          <div className="actions">
            <Button type="submit" className="btn-entrar">Entrar</Button>
          </div>
          <div className="cad">
          </div>
        </form>
      </div>
 
        
    )
}

export default Login

