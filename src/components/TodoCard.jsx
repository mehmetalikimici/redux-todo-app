import { useDispatch } from 'react-redux';
import Modal from './Modal';
import { useState } from 'react';
import { removeTodo, updateTodo } from '../redux/actions/todoActions';
import axios from 'axios';

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    axios
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(removeTodo(todo.id)))
      .catch((err) => alert('silme işleminde sorun oluştu!'));
  };

  const handleStatus = () => {
    const updated = { ...todo, is_done: !todo.is_done };

    axios
      .put(`/todos/${todo.id}`, updated)
      .then(() => dispatch(updateTodo(updated)));
  };

  return (
    <div className="border rounded shadow shadow-lg p-4 m-5">
      <h4>{todo.text}</h4>
      <h6>{todo.is_done ? 'Tamamlandı' : 'Devam Ediyor'}</h6>
      <p>{todo.created_at}</p>
      <button onClick={() => setIsOpen(true)} className="btn btn-primary">
        Düzenle
      </button>
      <button onClick={handleStatus} className="btn btn-success mx-3">
        {!todo.is_done ? 'Tamamla' : 'Geri Al'}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>
      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
