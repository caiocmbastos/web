import React from 'react';
import './assets/styles/global.css'
import Routes from './routes';
// JSX - Javascript com XML
// Componentes: partes de código, geralmente funções que retornam um HTML. É útil para reaproveitar o código em outro.
// Propriedade: São as propriedades que passamos através das páginas. Conhecidas como props
// Estado: Sempre que precisarmos manipular um valor, uma variável, dentro de um componente, vamos precisar de um estado.

function App() {
  return (
    <Routes/>
  );
}

export default App;
