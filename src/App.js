import './App.css';
import Pessoa from './components/Pessoa';
import Lista from './components/Lista';

function App() {

  return (
    <div className="App">
        <Pessoa 
        nome = "Saul Goodman"
        idade = "48"
        profissao = "Advogado"
        foto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5w4R2gENREvN5PDt9CauBsyc0YgS-AmrAA&usqp=CAU"
        />
        <Lista/>
    </div>
  );
}

export default App;
