import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {
  getDamageRange,
  getDpsValue,
  getWeaponDamage,
} from "./utilities/calculations";

function App() {
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
  const hp = 50,
    baseAtk = 10,
    externalAtk = 100,
    speed = 100,
    anvilCount = 0,
    weaponDmg = getWeaponDamage("weapon", weaponLevel),
    growthBonus = 2,
    critRate = 10,
    critMultiplier = 150,
    haste = 10,
    baseHitPerSecond = 4;
  return (
    <div className="App">
      <div>
        Character Stats
        <table className="stats-table">
          <thead>
            <tr>
              <td>Stats</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HP</td>
              <td>{hp}</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{externalAtk}%</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{speed}%</td>
            </tr>
            <tr>
              <td>Haste</td>
              <td>{haste}%</td>
            </tr>
            <tr>
              <td>Crit Rate</td>
              <td>{critRate}%</td>
            </tr>
            <tr>
              <td>Crit damage</td>
              <td>{critMultiplier}%</td>
            </tr>
          </tbody>
        </table>
      </div>
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
      <div>
        DPS:{" "}
        {getDpsValue(
          getDamageRange(
            baseAtk,
            externalAtk,
            anvilCount,
            weaponDmg,
            growthBonus,
            critRate,
            critMultiplier
          ).average,
          haste,
          baseHitPerSecond
        ) || 100}
      </div>
    </div>
  );
}

export default App;
