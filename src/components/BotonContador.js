import React, { useEffect, useState } from 'react'

export default function BotonContador() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    alert('Se montó componente contador')
    return () => alert('Se desmontó componente contador')
  }, [])

  useEffect(() => {
    if (contador !== 0) {
      alert(contador)
    }
  }, [contador])

  return (
    <button
      className='btn-agregar'
      onClick={() => {
        setContador(contador + 1)
      }}
    >
      Aumentar Contador
    </button>
  )
}
