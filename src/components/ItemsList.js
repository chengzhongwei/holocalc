

import Item from './Item'
import { connect } from 'react-redux';
import { addItem, deleteItem } from '../store/actions/itemActions';

const ItemsList = ({ items, addItem, deleteItem }) => {

  const handleAddItem = () => {
    // For demonstration, let's just add a timestamp.
    addItem(new Date().toISOString());
  };
  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      {items.map((item, index) => {
        return <div className='item-wrapper'><Item item={item}></Item><button value={index} onClick={() => deleteItem(index)}>Click Me</button></div>
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = {
  addItem,
  deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);