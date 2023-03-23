import { FaEdit, FaTrash } from 'react-icons/fa';

import Button from './Button';

const List = ({ items, onEdit, onDelete }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <Button
                icon={<FaEdit />}
                className="edit-btn"
                onClick={() => onEdit(id)}
              />
              <Button
                icon={<FaTrash />}
                className="delete-btn"
                onClick={() => onDelete(id)}
              />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
