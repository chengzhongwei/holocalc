

import Item from './Item'
import { connect } from 'react-redux';
import { addItem, deleteItem } from '../store/actions/itemActions';
import { itemOptions } from '../Constants';

const ItemsList = ({ items, addItem, deleteItem }) => {
  const handleAddItem = () => {
    addItem({
      index: items.length,
      name: '',
      label: '',
      minLevel: 1,
      maxLevel: 5,
      level: 1,
    });
  };
  return (
    <div>
      <button onClick={handleAddItem} disabled={items.length === 6}>Add Item</button>
      {items.map((item) => {
        return (
          <div className='item-wrapper'>
            <Item item={item}></Item>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        )
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