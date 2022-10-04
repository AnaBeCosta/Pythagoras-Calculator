import './App.css';
import triangulo from "./img/triangulo.png"
import React, {useState} from 'react';

function App() {
  const[form, setForm] = useState("");

  function handleChange(event){
    console.log("event 1", event.target.name);
    console.log("event 2", event.target.value);
    setForm({...form, [event.target.name]: event.target.value});
    console.log("form", form);
  }

  function handleSubmit(event){
    event.preventDefault();
    const resultado = document.getElementById("resultado");

    if(!form.a && !form.b && !form.c){
      alert("Os valores não podem ser inválidos. Digite o valor corretamente")
    }else if(form.a === ""){
      resultado.textContent = Math.sqrt(Math.pow(form.b, 2) + Math.pow(form.c, 2));
      console.log("resultado", resultado);
    }else if (form.b === ""){
      resultado.textContent = Math.sqrt(Math.pow(form.a, 2) - Math.pow(form.c, 2));
      console.log("resultado", resultado);
    }else if (form.c === ""){
      resultado.textContent = Math.sqrt(Math.pow(form.a, 2) - Math.pow(form.b, 2));
      console.log("resultado", resultado);
    }
  }

  return (
   <form onSubmit={handleSubmit}>
    <div className="container">
      <div className="informacoes">
        <div className="texto">
          <h1>Pythagoras Calculator</h1>
          <p>Digite os dois valores dos lados e deixe em vazio o lado que você quer descobrir o valor.</p>
        </div>
        <div className='image'>
            <img className='triangulo' src={triangulo} alt="triangulo" style={{width:"290px"}}></img>
        </div>
        <div className="boxResultado">
          <h1 id="text_result">Resultado: </h1>
          <div className="resultado" id="resultado">
        </div>
        </div>
      </div>

      <div className="form">
        <div className="container-input-label">
          <div className="children-container-input-label">
            <label>Lado A</label>
            <input placeholder="Digite o valor do lado A" onChange={handleChange} name="a"/>
            <label>Lado B</label>
            <input placeholder="Digite o valor do lado B" onChange={handleChange} name="b"/>
            <label>Lado C</label>
            <input placeholder="Digite o valor do lado C" onChange={handleChange} name="c"/>
          </div>
        </div>
        <div className="container-button">
          <button>Calcular</button>
        </div>
      </div>
    </div>
    </form>
  );
}

export default App;
