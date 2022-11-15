import React from 'react'
import './Carrusel.css'

export default function Carrusel({ children, clicDerechaIzquierda }) {
  return (
    <div className='container'>
      <button className='button left' onClick={clicDerechaIzquierda}>
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
      {children}
      <button className='button right' onClick={clicDerechaIzquierda}>
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
