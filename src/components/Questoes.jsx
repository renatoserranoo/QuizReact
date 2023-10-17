import React, { useState, useEffect } from 'react'
import './Questoes.css'

const Questoes = () => {
  const [respostasSelecionadas, setRespostasSelecionadas] = useState(Array(questoes.length).fill(null));
  const [questoesRespondidas, setQuestoesRespondidas] = useState([]);
  
  const handleRespostaSelecionada = (index, opcaoSelecionada) => {
    const novasRespostasSelecionadas = [...respostasSelecionadas];
    novasRespostasSelecionadas[index] = opcaoSelecionada;
    setRespostasSelecionadas(novasRespostasSelecionadas);
  };

  useEffect(() => {
    const respondidas = [];
    for (let i = 0; i < questoes.length; i++) {
      if (respostasSelecionadas[i] !== null) {
        respondidas.push(i);
      }
    }setQuestoesRespondidas(respondidas);
  }, [respostasSelecionadas]);

  const verificarRespostas = () => {
    let corretas = 0;
    
    for (let i = 0; i < questoes.length; i++) {
      if (respostasSelecionadas[i] === questoes[i].respostaCorreta) {
        corretas++;
      }
    }
    if (questoesRespondidas.length === questoes.length) {
      alert(`Quiz concluído! Você acertou ${corretas} de ${questoes.length} questões.`);
    } else {
      alert(`Você precisa responder todas as perguntas antes de finalizar`);
    }
  };

  return(
    <div>
        <h1>Quiz Front-End</h1>
        {questoes.map((questoes, index)=>(
          <div class="questoes"key={index}>
            <div class="radio-group">
              <h2>{questoes.pergunta}</h2>
              <input type="radio" name={`questao_${index}`} id={`radio1_${index}`} onChange={() => handleRespostaSelecionada(index, 1)}/>
              <label htmlFor={`radio1_${index}`}>{questoes.r1}</label><br />
              <input type="radio" name={`questao_${index}`} id={`radio2_${index}`} onChange={() => handleRespostaSelecionada(index, 2)}/>
              <label htmlFor={`radio2_${index}`}>{questoes.r2}</label><br />
              <input type="radio" name={`questao_${index}`} id={`radio3_${index}`} onChange={() => handleRespostaSelecionada(index, 3)}/>
              <label htmlFor={`radio3_${index}`}>{questoes.r3}</label><br />
              <input type="radio" name={`questao_${index}`} id={`radio4_${index}`} onChange={() => handleRespostaSelecionada(index, 4)}/>
              <label htmlFor={`radio4_${index}`}>{questoes.r4}</label><br />
            </div>
          </div>
        ))}
          <div class="respondidos">
            {questoesRespondidas.map((index) => (
              <div><p key={index}>Questão {index + 1}: Escolha {respostasSelecionadas[index]}</p></div>
            ))}
          </div>
        <button onClick={verificarRespostas}>Finalizar Quiz</button>
    </div>
  ); 
}

const questoes = [
  {
    pergunta: 'O que é Front-End?',
    r1: 'Parte de um sistema que é oculta para o usuário.',
    r2: 'Parte de um sistema é visivel e interativa ao usuário.',
    r3: 'Parte lógica que recebe as regras de negócio.',
    r4: 'Nenhuma das alternativas anteriores.',
    respostaCorreta:2
  },
  {
    pergunta: 'O que é React JS',
    r1: 'Uma poderosa biblioteca JavaScript.',
    r2: 'Uma linguagem de programação.',
    r3: 'Um servidor de Cloud.',
    r4: 'Todas as respostas anteriores.',
    respostaCorreta:1
  },
  {
    pergunta: 'Quais são as principais tecnologias do mundo Front-End?',
    r1: 'Java, Golang e python.',
    r2: 'AWS, Google Cloud e Azure.',
    r3: 'Kotlin, HTMl e CSS.',
    r4: 'HTMl, CSS e JavaScript.',
    respostaCorreta:4
  },
]

export default Questoes