import mongoose from "mongoose";

const MaxLevel = 7;

const weaponSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    maxLevel: { type: Number, required: true, default: MaxLevel },
    damage: { type: Array, required: true, default: Array(MaxLevel).fill(1) },
    attackTime: { type: Array, required: true, default: Array(MaxLevel).fill(60) },
    attackCount: { type: Array, required: true, default: Array(MaxLevel).fill(1) },
    critBonus: { type: Array, required: true, default: Array(MaxLevel).fill(0) },
})

export default mongoose.model("Weapon", weaponSchema);