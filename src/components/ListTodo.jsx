import { useSelector } from 'react-redux';
import TodoCard from './TodoCard';

const ListTodo = () => {
  const state = useSelector((store) => store.todoReducer);

  return (
    <div>
    {state.todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id}/>
    ))}
    </div>
    );
};

export default ListTodo;
