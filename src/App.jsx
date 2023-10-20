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

    const Subtracao = ()=> {
      setResultado(primeiroValor - segundoValor)
    }

    const Multiplicacao = () => {
      setResultado(primeiroValor * segundoValor)
    }

    const Divisao = () => {
      setResultado(primeiroValor / segundoValor)
    }

  return (
    <S.Main>
      <S.GlobalStyle/>
      <S.H1>Calculadora</S.H1>
      {/* Para pegar o numero digitado dentro do input vamos
      usar o evento onChange(), esse evento acontece no momento que acontece 
      uma ação no elemento HTML (nesse caso em nossa tag input), a cada ação
      a nossa função é atualizada e o nossa variavel de estado é atualizada com o valor
      inserido. */}
      <S.Input placeholder="Insira um número" onChange={capturandoPrimeiroValor}/>
      <S.Input placeholder="Insira um número" onChange={capturandoSegundoValor} />
      <section>
      <S.Btn onClick={Soma}>+</S.Btn>
      <S.Btn onClick={Subtracao}>-</S.Btn>
      <S.Btn onClick={Multiplicacao}>x</S.Btn>
      <S.Btn onClick={Divisao}>/</S.Btn>
      </section>
      <S.Resultado>{resultado}</S.Resultado>
    </S.Main>
  )
}
export default App

