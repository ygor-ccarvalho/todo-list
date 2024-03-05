import {useState} from 'react'

const TodoForm = () => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;

        setValue("");
        setCategory("");
        
        console.log("Enviou form!");
    };
  return (
    <div className="TodoForm">
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
         placeholder='Digite o título' 
        value = {value} 
        onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudo">Estudo</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    
    
    </div>
  )
}

export default TodoForm
