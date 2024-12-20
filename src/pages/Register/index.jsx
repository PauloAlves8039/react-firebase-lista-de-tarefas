import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
  
    if (!email.includes("@") || password.length < 6) {
      alert("Por favor, insira um e-mail válido e uma senha com no mínimo 6 caracteres.");
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error("Erro ao fazer o cadastro:", error);
      alert(`Erro: ${error.message}`);
    }
  }
  
  return(
    <div className="home-container">
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta!</span>

      <form className="form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value) }
        />

        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value) }
        />

        <button type="submit" >Cadastrar</button>
      </form>

      <Link className="button-link" to="/">
        Já possui uma conta? Faça login!
      </Link>

    </div>
  )
}

export default Register;