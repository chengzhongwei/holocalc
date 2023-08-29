import { useState } from "react";

import Select from 'react-select'
const Item = (item) => {
  const [itemLevel, setItemLevel] = useState(1);
  const itemMinLevel = 1,
    itemMaxLevel = 5;
  const [isItemLevelDownDisabled, setItemLevelDownDisabled] =
    useState(true);
  const [isItemLevelUpDisabled, setItemLevelUpDisabled] = useState(false);
  const onItemLevelUp = () => {
    setItemLevel(itemLevel + 1);
    setItemLevelDownDisabled(itemLevel + 1 === itemMinLevel);
    setItemLevelUpDisabled(itemLevel + 1 === itemMaxLevel);
  };
  const onItemLevelDown = () => {
    setItemLevel(itemLevel - 1);
    setItemLevelUpDisabled(itemLevel - 1 === itemMaxLevel);
    setItemLevelDownDisabled(itemLevel - 1 === itemMinLevel);
  };
  const itemOptions = [
    { value: 'gorilla\'s paw', label: 'Gorilla\'s Paw' },
    { value: 'membership', label: 'Membership' },
    { value: 'face mask', label: 'Face Mask' }
  ]
  return (
    <div>
      <div><Select className="select" options={itemOptions} placeholder="select an item"></Select></div>
        Item level{" "}
        <button
          disabled={isItemLevelDownDisabled}
          onClick={onItemLevelDown}
        >
          -
        </button>
        <span> {itemLevel} </span>
        <button disabled={isItemLevelUpDisabled} onClick={onItemLevelUp}>
          +
        </button>
      </div>
  )
}

export default Item;