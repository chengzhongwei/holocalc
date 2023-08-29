import { useState } from "react";

const Weapon = () => {
  const [weaponLevel, setWeaponLevel] = useState(1);
  const weaponMinLevel = 1,
    weaponMaxLevel = 7;
  const [isWeaponLevelDownDisabled, setWeaponLevelDownDisabled] =
    useState(true);
  const [isWeaponLevelUpDisabled, setWeaponLevelUpDisabled] = useState(false);
  const onWeaponLevelUp = () => {
    setWeaponLevel(weaponLevel + 1);
    setWeaponLevelDownDisabled(weaponLevel + 1 === weaponMinLevel);
    setWeaponLevelUpDisabled(weaponLevel + 1 === weaponMaxLevel);
  };
  const onWeaponLevelDown = () => {
    setWeaponLevel(weaponLevel - 1);
    setWeaponLevelUpDisabled(weaponLevel - 1 === weaponMaxLevel);
    setWeaponLevelDownDisabled(weaponLevel - 1 === weaponMinLevel);
  };


  return (
    <div>
        Weapon level{" "}
        <button
          disabled={isWeaponLevelDownDisabled}
          onClick={onWeaponLevelDown}
        >
          -
        </button>
        <span> {weaponLevel} </span>
        <button disabled={isWeaponLevelUpDisabled} onClick={onWeaponLevelUp}>
          +
        </button>
      </div>
  )
}

export default Weapon;