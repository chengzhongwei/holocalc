// =(10*[0.7~1.3]*(CharacterBAseAtk+ExternalAtkBonus)*(0.2*AnvilCount+WpnDmg+2%*GrowthBonus))*(1+IF((TotalCritRate)>100%,100%,IF((TotalCritRate)<0%,0%,TotalCritRate))*CritMultiplier)

export function getDamageRange(
  baseAtk,
  externalAtk,
  anvilCount,
  weaponDmg,
  growthBonus,
  critRate,
  critMultiplier
) {
  const actualCritRate =
    (critRate > 100 ? 100 : critRate < 0 ? 0 : critRate) * 0.01;
  const lower =
    10 *
    0.7 *
    (baseAtk + externalAtk * 0.01) *
    (0.2 * anvilCount + weaponDmg + 0.02 * growthBonus) *
    ((1 + actualCritRate) * critMultiplier * 0.01);
  const upper =
    10 *
    1.3 *
    (baseAtk + externalAtk) *
    (0.2 * anvilCount + weaponDmg + 0.02 * growthBonus) *
    ((1 + actualCritRate) * critMultiplier * 0.01);
  const damageOutput = {
    lower: lower,
    upper: upper,
    average: 0.5 * (lower + upper),
  };
  return damageOutput;
}

export function getDpsValue(averageDamageOutput, haste, hitNumberPerAttack) {
  const dps = averageDamageOutput * hitNumberPerAttack * (1 + haste * 0.01);
  return dps.toFixed(0);
}

export function getWeaponDamage(name, level) {
  if (name === "weapon") {
    switch (level) {
      case 1:
        return 1.2;
      case 2:
      case 3:
        return 1.4;
      case 4:
      case 5:
        return 1.6;
      case 6:
        return 1.8;
      case 7:
        return 2;
      default:
        return 2;
    }
  } else return 2
}
