import React, { Component } from 'react'
import Carrusel from './components/Carrusel'

import './App.css'
import BotonContador from './components/BotonContador'

class App extends Component {
  state = {
    carruselChildComponents: [
      <ExampleComponentOne />,
      <ExampleComponentTwo />,
      <ExampleComponentThree />,
    ],
  }

  agregarComponenteFuncionalACarrusel = () => {
    this.setState({
      carruselChildComponents: [
        ...this.state.carruselChildComponents,
        <FunctionalComponent />,
      ],
    })
  }

  quitarComponenteFuncionalACarrusel = () => {
    this.setState({
      carruselChildComponents: [
        ...this.state.carruselChildComponents.slice(
          0,
          this.state.carruselChildComponents.length - 1
        ),
      ],
    })
  }

  render() {
    return (
      <div className='app-container'>
        <Carrusel childComponents={this.state.carruselChildComponents} />
        <button
          className='btn-agregar'
          onClick={this.agregarComponenteFuncionalACarrusel}
        >
          Agregar componente funcional a carrusel
        </button>
        <button
          className='btn-agregar'
          style={{ marginLeft: '8px' }}
          onClick={this.quitarComponenteFuncionalACarrusel}
        >
          Quitar componente funcional a carrusel
        </button>
        <div>
          <BotonContador />
        </div>
      </div>
    )
  }
}

export default App

function FunctionalComponent() {
  return <div style={{ marginLeft: '60px' }}>Componente funcional</div>
}

class ExampleComponentOne extends Component {
  render() {
    return (
      <form className='form'>
        <legend>Componente de Ejemplo Formulario</legend>
        <label>Enter your full name</label>
        <br />
        <input type='text' name='name' />
        <br />
        <label>Enter your email</label>
        <br />
        <input type='email' name='email' />
        <br />
        <label>Enter your password</label>
        <br />
        <input type='password' name='pass' />
        <br />
        <label>confirm your password</label>
        <br />
        <input type='password' name='pass' />
        <br />
        <br />
        <label>Enter your gender</label>
        <br />
        <input type='radio' id='gender' name='gender' value='male' />
        Male <br />
        <input type='radio' id='gender' name='gender' value='female' />
        Female <br />
        <input type='radio' id='gender' name='gender' value='others' />
        others <br />
        <br />
        Enter your Address:
        <br />
        <textarea></textarea>
        <br />
        <input type='submit' value='sign-up' />
      </form>
    )
  }
}

class ExampleComponentTwo extends Component {
  render() {
    return (
      <div style={{ minHeight: '100px' }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img className='image' alt='aves' src='/images/ave.jpg' />
        </div>
      </div>
    )
  }
}

class ExampleComponentThree extends Component {
  render() {
    return (
      <div style={{ padding: '0 6rem' }}>
        <ul>
          <li>Three</li>
          <li>Three</li>
          <li>Three</li>
          <li>Three</li>
          <li>Three</li>
        </ul>
      </div>
    )
  }
}
