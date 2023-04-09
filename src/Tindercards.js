import TinderCard  from 'react-tinder-card';
import "./Tindercards.css"
import React from 'react'
import { useState } from 'react';


function Tindercards () {
    const [people, setpeople] = useState([
        {
            name: 'Mr. Raesh',
            
            url:'https://image.cnbcfm.com/api/v1/image/105135742-GettyImages-485093683.jpg?v=1573577305'
        },
        {
            
                name: 'Miss. Maiyam',
              
                url:'https://i.pinimg.com/originals/be/fa/7b/befa7bf614e16934aa1b8d9d9866b725.jpg'
            
        },
        {
            
            name: 'Rango Vasturza',
          
            url:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        
    },
    
{
            
    name: 'Ali Rotre',
  
    url:'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'

},
{
            
    name: 'Maiyam balik',
  
    url:'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

},
{
            
    name: 'Ana Santana',
  
    url:'https://i0.wp.com/thatrandomagency.com/wp-content/uploads/2022/10/lauren_headshot2022.png?resize=640%2C640&ssl=1'

},
{
            
    name: 'Klaus Mikelson',
  
    url:'https://c4.wallpaperflare.com/wallpaper/800/671/785/tv-show-the-originals-actor-joseph-morgan-wallpaper-preview.jpg'

},
{
            
    name: 'Elijah Mikelson',
  
    url:'https://i.pinimg.com/736x/83/5b/5b/835b5b43e5bc2a2acdf680812eb2c7df.jpg'

},
{
            
    name: 'Rebaca',
  
    url:'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fculturess.com%2Ffiles%2Fimage-exchange%2F2018%2F08%2Fie_78613.jpeg'

},


{
            
    name: 'Miss. Maiyam',
  
    url:'https://i.pinimg.com/originals/be/fa/7b/befa7bf614e16934aa1b8d9d9866b725.jpg'

},
    ]);
        return (
        <div className="tinderCards">
            <div className="tindercards__cardcontainer">
            
               {people.map((person)=>(
               <TinderCard className="swipe"
                key={person.name}
                preventSwipe={['up','down']}>
             <div className="card"
              style={{backgroundImage: `url(${person.url})`}}>

    <h3>{person.name}</h3>
    
    </div>
    </TinderCard>
               ))}
               </div>
        </div>
    );
}

export default Tindercards

