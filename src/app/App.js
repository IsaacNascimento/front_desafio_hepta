import '../styles/App.css';
import { Tarefas } from './pages/Tarefa/Tarefas';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBar } from './components/appBar';
import { FormTarefas } from './pages/Tarefa/formTarefas';
import { Contatos } from './pages/Contato/Contatos';
import { FormContatos } from './pages/Contato/formContatos';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
       <AppBar />
       <Routes>
        <Route path='/' element={<Tarefas />}/>
        <Route path='/create-tarefa' element={<FormTarefas />}/>
        <Route path='/atualizar-tarefa/:id' element={<FormTarefas />}/>
        <Route path='/contatos' element={<Contatos />}/>
        <Route path='/create-contato' element={<FormContatos />}/>
        <Route path='/atualizar-contato/:id' element={<FormContatos />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
