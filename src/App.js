import React, {useState} from 'react'
import data from './data'

function App() {
  const [friends, setFriends] = useState(data)
  function handleDelete(){
    setFriends([])
  }
  function handleEachDelete(id){
    const updatedList = friends.filter(friend => friend.id !== id)
    setFriends(updatedList)
  }
  return (
    <main>
      <section className='card'>
        <h3>{friends.length} Birthdays today!</h3>
        {friends.map((friend) => {
          return(
            <article key={friend.id} className='friend'>
              <img src={friend.image}/>
              <div>
                <button type='button' className='btn1' onClick={() => handleEachDelete(friend.id)}>X</button>
                <h4>{friend.name}</h4> 
                <p>{friend.age}</p>
              </div>
            </article>
            )
          })
        }
        <button type='button' className='btn2' onClick={handleDelete}>Clear</button>
      </section>
    </main>
  )
}

export default App

