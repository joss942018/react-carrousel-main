import React, { useEffect, useState } from 'react'
import Carrusel from './components/Carrusel'

import './App.css'
import BotonContador from './components/BotonContador'

function App() {
  const [numeroComponente, setNumeroComponente] = useState(1)
  const [esContadorVisible, setEsContadorVisible] = useState(false)

  const clicDerechaIzquierdaCarrusel = () => {
    if (numeroComponente === 1) setNumeroComponente(2)
    else setNumeroComponente(1)
  }

  let hijoCarrusel
  if (numeroComponente === 1) hijoCarrusel = <ExampleComponentOne />
  else hijoCarrusel = <ExampleComponentTwo />

  return (
    <div className='app-container'>
      <Carrusel clicDerechaIzquierda={clicDerechaIzquierdaCarrusel}>
        {hijoCarrusel}
      </Carrusel>
      <button
        className='btn-agregar'
        style={{ marginRight: '2rem' }}
        onClick={() => {
          setEsContadorVisible((prev) => !prev)
        }}
      >
        Hacer contador {esContadorVisible ? 'invisible' : 'visible'}
      </button>
      {esContadorVisible && <BotonContador />}
    </div>
  )
}

export default App

function ExampleComponentOne() {
  useEffect(() => {
    alert('Se montó componente uno')
    return () => alert('Se desmontó componente uno')
  }, [])

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

function ExampleComponentTwo() {
  useEffect(() => {
    alert('Se montó componente dos')
    return () => alert('Se desmontó componente dos')
  }, [])

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
