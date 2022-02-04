import react from "react";
import SlideShow from './components/SlideShow'
import styled from 'styled-components'
import './estilos.css'

const App = () => {
  return (
    <main>
      <Titulo>Productos destacados</Titulo>
      <SlideShow />
    </main>
  )
}

const Titulo = styled.p `
  font-size: 18px;
  font-weight: 700;
  text-transform: Uppercase;
  margin-bottom: 10px;
`;

export default App;