import { useState } from "react";

const useCounter = () => {

  const [contador, setContador] = useState(0);

  const sumarValor = () => {
    setContador(contador + 1);
  };

  const restarValor = () => {
    setContador(contador - 1);
  };


  const loQueRetorno = {
    sumar : sumarValor,
    restar : restarValor,
    valor : contador
  }

  return loQueRetorno

}

export default useCounter