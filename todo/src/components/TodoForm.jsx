import React from 'react'

const TodoForm = () => {
  return (
    <div className="TodoForm">
      <h2>Criar Tarefa:</h2>
      <form>
        <input type="text" placeholder='Digite o título'/>
        <select>
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
