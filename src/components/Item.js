import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { increaseItemLevel, decreaseItemLevel, changeItem } from '../store/actions/itemActions';
import { itemOptions } from '../Constants';

const Item = (props) => {
  const itemMinLevel = 1,
        itemMaxLevel = 5;

  const onItemLevelUp = () => {
    props.increaseLevel();
  };

  const onItemLevelDown = () => {
    props.decreaseLevel();
  };
  
  const onItemChange = (selectedOption) => {
    props.changeItem({ index: props.item.index, name: selectedOption.value, label: selectedOption.label });
  };

  return (
    <div>
      <div>
        {props.item.label}
        <Select
          onChange={onItemChange}
          className="select"
          options={itemOptions}
          placeholder="select an item"
        />
      </div>
      Item level 
      <button
        disabled={props.item.level <= itemMinLevel}
        onClick={onItemLevelDown}
      >
        -
      </button>
      <span> {props.item.level || 0} </span>
      <button disabled={props.item.level >= itemMaxLevel} onClick={onItemLevelUp}>
        +
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increaseLevel: () => dispatch(increaseItemLevel(ownProps.item.index)),
    decreaseLevel: () => dispatch(decreaseItemLevel(ownProps.item.index)),
    changeItem: (item) => dispatch(changeItem(item))
  };
};

export default connect(null, mapDispatchToProps)(Item);
