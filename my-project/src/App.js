import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="contenedor">
          <form id="formulario" class="form" >
            <label for="nombre">Nombre completo</label>
            <input type="text" id="nombre"></input>

            <label for="mail">Mail:</label>
            <input type="text" id="mail"></input>

            <label for="mail">Telefono:</label>
            <input type="text" id="telefono"></input>

            <input type="button" class="botonesInput" value="Enviar" id="botonSubmit" onClick={mostrarResultados}></input>
            <input type="button" class="botonesInput" value="Reset" id="botonReset" onClick={resetForm}></input>
          </form>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React JS
        </a>
      </header >
    </div >
  );
  }

function mostrarResultados() {
  var nombre = document.getElementById("nombre").value;
  var mail = document.getElementById("mail").value;
  var tel = document.getElementById("telefono").value;
  if (nombre === "" || mail === "" || tel === "") {
    alert('No completaste todos los datos!');
  } else {
    alert(`Gracias por enviar tus datos! Nombre: ${nombre}. Mail: ${mail}. Telefono ${tel}`);
    resetForm();
  }
}

function resetForm() {
  document.getElementById('formulario').reset();
}


export default App;
