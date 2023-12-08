import './KDA.css'
import { useState } from 'react'
import { FcLike } from 'react-icons/fc'

const KDA = () => {
  const kdaMembers = [
    {
      name: 'Ahri',
      lane: 'mid',
      type: 'mage',
    },
    {
      name: 'Kaisa',
      lane: 'bot',
      type: 'ADC',
    },
    {
      name: 'Akali',
      lane: 'mid',
      type: 'assassin'
    },
    {
      name: 'Evelyn',
      lane: 'jungle',
      type: 'assassin'
    }
  ];

  const [currentMemberIDX, setCurrentMemberIDX] = useState(0);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextChamp = () => {
    const nextMember = (currentMemberIDX + 1) % kdaMembers.length;
    setCurrentMemberIDX(nextMember);
    setLikes(0);
    setIsLiked(false);
  };

  const previousChamp = () => {
    const previousIndex =
      (currentMemberIDX - 1 + kdaMembers.length) % kdaMembers.length;
    setCurrentMemberIDX(previousIndex);
    setLikes(0);
    setIsLiked(false);
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const currentkdaChamp = kdaMembers[currentMemberIDX];

  return (
    <>
    <body>
      <header>
        <h1>Pick your favorite KDA champion</h1>
      </header>

        <table>
          <tr>
            <div>
              <th>KDA Member: {currentkdaChamp.name}</th>
            </div>
            <div>
              <th>Lane: {currentkdaChamp.lane}</th>
            </div>
            <div>
              <th>Type: {currentkdaChamp.type}</th>
            </div>
            <div>
              <th> <FcLike />: {likes} </th>
            </div>
            <div>
              <th>
                <button onClick={handleLike}><FcLike /></button>
              </th>
              <th>
                <button onClick={previousChamp}>Previous Champ</button>
                <button onClick={nextChamp}>Next Champ</button>
              </th>
            </div>
          </tr>
        </table>
        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a155f0b1-4492-4c2c-9f70-101cec027cb9/defapay-1d872117-fce2-4be5-942b-37f4411d51ec.png/v1/fill/w_1280,h_560/kda_logo_by_mockingraffy_defapay-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYwIiwicGF0aCI6IlwvZlwvYTE1NWYwYjEtNDQ5Mi00YzJjLTlmNzAtMTAxY2VjMDI3Y2I5XC9kZWZhcGF5LTFkODcyMTE3LWZjZTItNGJlNS05NDJiLTM3ZjQ0MTFkNTFlYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Tawp-bK2IpamzxXieDeu8PMppAn2hAL7eph4ZoTYeWs'></img>
      </body>
    </>
  )
}
export default KDA 