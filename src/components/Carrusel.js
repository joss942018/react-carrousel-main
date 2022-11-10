import React, { Component } from 'react'
import './Carrusel.css'

export default class Carrusel extends Component {
  state = {
    indiceDeComponenteMostrado: 0,
  }

  ultimoIndiceDeComponente = this.props.childComponents.length - 1

  componentDidUpdate(prevProps) {
    if (this.props.childComponents.length > prevProps.childComponents.length) {
      alert('Se montó componente')
    }
    if (this.props.childComponents.length < prevProps.childComponents.length) {
      alert('Se quitó componente')
    }
    this.ultimoIndiceDeComponente = this.props.childComponents.length - 1
  }

  clicDerecha = () => {
    if (
      this.state.indiceDeComponenteMostrado === this.ultimoIndiceDeComponente
    ) {
      this.setState({
        indiceDeComponenteMostrado: 0,
      })
    } else {
      this.setState({
        indiceDeComponenteMostrado: this.state.indiceDeComponenteMostrado + 1,
      })
    }
  }

  clicIzquierda = () => {
    if (this.state.indiceDeComponenteMostrado === 0) {
      this.setState({
        indiceDeComponenteMostrado: this.ultimoIndiceDeComponente,
      })
    } else {
      this.setState({
        indiceDeComponenteMostrado: this.state.indiceDeComponenteMostrado - 1,
      })
    }
  }

  render() {
    return (
      <div className='container'>
        <button className='button left' onClick={this.clicIzquierda}>
          <svg
            style={{ width: '2rem' }}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </button>
        {this.props.childComponents[this.state.indiceDeComponenteMostrado]}
        <button className='button right' onClick={this.clicDerecha}>
          <svg
            style={{ width: '2rem' }}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
    )
  }
}
