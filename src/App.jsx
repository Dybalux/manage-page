import { useState } from 'react'
import './App.css'

const styles = {
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px"
  }
}

function LoginForm() {
  //Guardo los valores de los inputs
  const [formData, setFormData] = useState({
    user: "",
    password: ""
  })

  //Guardo los errores de los inputs
  const [errors, setErrors] = useState({});

  //Funcion que maneja los cambios en los inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  //Funcion para validar el formulario
  const validate = () => {
    let tempErrors = {};
    if(!formData.user){
      tempErrors.user = "El usuario es obligatorio";
    } else if(formData.password.length < 6){
      tempErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    // Devuelve true si no hay errores (el objeto está vacío)
    return Object.keys(tempErrors).length === 0;
  }

  //Funcion que maneja el envio del formulario

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validate()){
      alert("Formulario enviado");
      console.log("Datos enviados: " , formData);
    } else{
      console.log('El formulario tiene errores y no se enviará.');
      alert("El formulario tiene errores y no se enviará.");
      setErrors({
        user: !formData.user ? "El usuario es obligatorio" : "",
        password: formData.password.length < 6 ? "La contraseña debe tener al menos 6 caracteres" : ""
      });
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <div>
        <label>Usuario:</label>
        <input
          type='text'
          id='user'
          name='user'
          value={formData.user}
          onChange={handleChange}
        />
        {/*Renderizado confdicional con el mensaje de error*/}
        {errors.user && <p style={styles.error}>{errors.user}</p>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        {/*Renderizado confdicional con el mensaje de error*/}
        {errors.password && <p style={styles.error}>{errors.password}</p>}
      </div>
      <button type='submit'>Ingresar</button>
    </form>
  )
}
function App() {

  return (
    <>
      <div className="App">
      <header className="App-header">
        <h1>Formulario de Inicio de Sesión</h1>
      </header>
      <main>
        <LoginForm />
      </main>
    </div>
    </>
  )
}

export default App
