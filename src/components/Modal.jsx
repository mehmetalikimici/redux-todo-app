import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/actions/todoActions';
import axios from 'axios';

const Modal = ({ close, todo }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newText = e.target[1].value;
    const updated = { ...todo, text: newText };

    axios
      .put(`/todos/${todo.id}`, updated)
      .then(() => dispatch(updateTodo(updated)));

    close();
  };

  return (
    <div className="modal d-block text-dark bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Düzenle</h5>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <label>Yeni Başlık</label>
            <input
              className="form-control shadow mt-2"
              type="text"
              defaultValue={todo.text}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={close}>
              Vazgeç
            </button>
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
