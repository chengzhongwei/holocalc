import Select from 'react-select'
import {characters} from '../Constants'

export const CharacterSelect = (characterChange) => {
  
  let characterOptions = []
  for(let character of characters) {
    characterOptions.push({value: character.name})
  }
  const select = (character) => {
    console.log('character change')
    // characterChange(character)
  }
  return (
    <>
      <Select options={characters} onChange={()=>select} placeholder="Select a character" className='character-select'></Select>
    </>
  )
}