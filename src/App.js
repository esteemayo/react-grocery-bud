import { useState, useEffect } from 'react';

import List from 'components/List';
import Alert from 'components/Alert';
import Button from './components/Button';

import './App.css';

const getLocalStorage = () => {
  const list = localStorage.getItem('list');

  if (list) return JSON.parse(list);

  return [];
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, 'danger', 'Please enter a value');
    } else if (name && isEditing) {
      const updList = list.map((item) => {
        if (item.id === editID) return { ...item, title: name };
        return item;
      });

      setList(updList);
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Value changed');
    } else {
      showAlert(true, 'success', 'Item added to the list');
      const id = new Date().getTime().toString();
      const newList = { id, title: name };
      setList([...list, newList]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const handleClearList = () => {
    showAlert('true', 'danger', 'Empty list');
    setList([]);
  };

  const handleDeleteItem = (id) => {
    showAlert(true, 'danger', 'Item removed');
    const updList = list.filter((item) => item.id !== id);
    setList(updList);
  };

  const handleEditItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {alert.show && <Alert {...alert} hideAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            type='text'
            placeholder='e.g. Eggs'
            className='grocery'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            type='submit'
            className='submit-btn'
            text={`${isEditing ? 'Edit' : 'Submit'}`}
          />
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List
            items={list}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
          />
          <Button
            text='Clear Items'
            className='clear-btn'
            onClick={handleClearList}
          />
        </div>
      )}
    </section>
  );
}

export default App;
