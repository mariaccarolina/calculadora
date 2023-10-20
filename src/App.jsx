import React, {useState} from "react";
// importar o useState 
import * as S from "./Style"

function App() {
  // useState vai armazenar um dado e pode atualizar esse valor
  const [primeiroValor, setPrimeiroValor] = useState()
  const [segundoValor, setSegundoValor] = useState()
  const [ resultado, setResultado] = useState()
  // Aqui acima vamos armazenar o numero inserido no input através da 
  // função abaixo:

   const capturandoPrimeiroValor = (e) => {
        setPrimeiroValor(Number(e.target.value))
    }

    const capturandoSegundoValor = (e) => {
      setSegundoValor(Number(e.target.value))
    }

    const Soma = () => {
        setResultado(primeiroValor + segundoValor)
        console.log(resultado)
    }

  return (
    <S.Main>
      <S.GlobalStyle/>
      <S.H1>Calculadora</S.H1>
      {/* Para pegar o numero digitado dentro do input vamos
      usar o evento onChange() */}
      <S.Input placeholder="Insira um número" onChange={capturandoPrimeiroValor}/>
      <S.Input placeholder="Insira um número" onChange={capturandoSegundoValor} />
      <S.Soma onClick={Soma}>+</S.Soma>
      <S.Resultado>{resultado}</S.Resultado>
    </S.Main>
  )
}
export default App

