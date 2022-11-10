import React, { Component, useEffect, useState } from 'react'

// export default class BotonContador extends Component {
//   state = {
//     contador: 0,
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contador !== this.state.contador) {
//       alert(this.state.contador)
//     }
//   }

//   render() {
//     return (
//       <button
//         className='btn-agregar'
//         onClick={() => {
//           this.setState({
//             contador: this.state.contador + 1,
//           })
//         }}
//       >
//         Aumentar Contador
//       </button>
//     )
//   }
// }

export default function BotonContador() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    if (contador != 0) {
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
