import {useState} from 'react'

const PlayerName = () => {
  const [initialName, setinitialNameState] = useState({
    id: 1,
    player: {
      name: "Dylan"
    }
  })

  const handleClick = () => {
    setinitialNameState(prevState => ({
      ...prevState,
      player: {
        ...prevState.player,
        name: "Christian Sachs"
      }     
    }))
  }
  
  return (
    <div>
      <p>Player Name: {initialName.player.name}</p>
      <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default PlayerName;
