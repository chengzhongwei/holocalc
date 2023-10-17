import "./App.css";
import { useState } from "react";
import {
  getDamageRange,
  getDpsValue,
  getWeaponDamage,
} from "./utilities/calculations";
import ItemsList from "./components/ItemsList";
import Weapon from "./components/Weapon";
import { CharacterSelect } from "./components/CharacterSelect";

function App() {
  
  const characterChange = (character) => {

  }
  const characterStats = {
    hp: 50,
    baseAtk: 10,
    externalAtk: 100,
    speed: 100,
    anvilCount: 0,
    weaponDmg: getWeaponDamage(),
    growthBonus: 2,
    critRate: 10,
    critMultiplier: 150,
    haste: 10,
    hitNumberPerAttack: 4
  }
  const hp = 50,
    baseAtk = 10,
    externalAtk = 100,
    speed = 100,
    anvilCount = 0,
    weaponDmg = getWeaponDamage(),
    growthBonus = 2,
    critRate = 10,
    critMultiplier = 150,
    haste = 10,
    hitNumberPerAttack = 4;
  return (
    <div className="App">
      <header>
      <h1>HoloCalc</h1>
      <h2>Holocure DPS Calculator</h2>
      </header>
      <div>
        <CharacterSelect characterChange={characterChange}></CharacterSelect>
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
              <td>{characterStats.hp}</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{characterStats.externalAtk}%</td>
            </tr>
            <tr>
              <td>Haste</td>
              <td>{characterStats.haste}%</td>
            </tr>
            <tr>
              <td>Crit Rate</td>
              <td>{characterStats.critRate}%</td>
            </tr>
            <tr>
              <td>Crit damage</td>
              <td>{characterStats.critMultiplier}%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Weapon></Weapon>
      <ItemsList></ItemsList>
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
          hitNumberPerAttack
        ) || "Invalid"}
      </div>
    </div>
  );
}

export default App;
