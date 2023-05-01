import React, { useState, useEffect } from 'react';

function Cronometro() {
  // Definimos los estados para cada unidad de tiempo
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  // Estado que indica si el cronómetro está activo o no
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    // Variable para guardar el identificador del intervalo
    let intervalo = null;

    // Si el cronómetro está activo, iniciamos el intervalo
    if (activo) {
      intervalo = setInterval(() => {
          if (segundos === 59) {
            // Si llegamos a 59 segundos, reseteamos a cero y sumamos 1 minuto
            setSegundos(0);
            if (minutos === 59) {
              // Si llegamos a 59 minutos, reseteamos a cero y sumamos 1 hora
              setMinutos(0);
              setHoras(horas => horas + 1);
            } else {
              setMinutos(minutos => minutos + 1);
            }
          } else {
            setSegundos(segundos => segundos + 1);
          }
      }, 1000);
    } else if (!activo && ( segundos !== 0 || minutos !== 0 || horas !== 0)) {
      // Si el cronómetro está pausado y hay alguna unidad de tiempo distinta de cero, detenemos el intervalo
      clearInterval(intervalo);
    }

    // Devolvemos una función que se ejecutará al desmontar el componente, para asegurarnos de que se detiene el intervalo
    return () => clearInterval(intervalo);
  }, [activo, segundos, minutos, horas]);

  // Función para cambiar el estado de activo
  const toggle = () => {
    setActivo(!activo);
  };

  // Función para resetear el cronómetro
  const reset = () => {
    setHoras(0);
    setMinutos(0);
    setSegundos(0);
    setActivo(false);
  };

  // Mostramos las unidades de tiempo en formato hh:mm:ss.xx
  return (
    <div>
      <h1>Cronómetro</h1>
      <p>{horas.toString().padStart(2, '0')}:{minutos.toString().padStart(2, '0')}:{segundos.toString().padStart(2, '0')}</p>
      <button onClick={toggle}>{activo ? 'Pausar' : 'Iniciar'}</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
}

export default Cronometro
