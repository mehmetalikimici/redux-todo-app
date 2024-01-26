import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addTodo } from '../redux/actions/todoActions';
import axios from 'axios';

const AddForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    axios.
      post('/todos', newTodo)
      .then(() => dispatch(addTodo(newTodo)));
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-1 my-5">
      <input
        className="form-control"
        type="text"
        placeholder="örn: typescript projesi yap"
      />
      <button className="btn btn-warning">Ekle</button>
    </form>
  );
};

export default AddForm;
