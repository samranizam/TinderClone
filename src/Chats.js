import React from 'react'
import "./Chats.css"
import "./Chat.css"
import Chat from "./Chat"
function Chats ()  {
    return (
        <div className="chats">
           <Chat
           name="Klaus"
           message="Hey! Wanna go to New Orleans?"
           timestamp="2 minutes ago"
           profilePic="https://c4.wallpaperflare.com/wallpaper/800/671/785/tv-show-the-originals-actor-joseph-morgan-wallpaper-preview.jpg"
           /> 
             <Chat
           name="Elijah"
           message="I think yesterday was the concert"
           timestamp="20 minutes ago"
           profilePic="https://i.pinimg.com/736x/83/5b/5b/835b5b43e5bc2a2acdf680812eb2c7df.jpg"
           /> 
             <Chat
           name="Rebaca"
           message="Sure thing, lets catch up"
           timestamp="30 minutes ago"
           profilePic="https://th.bing.com/th/id/R.8c64b35671286f45df9ab7130673697a?rik=Vstvw4I3zwSDvg&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f906926%2fimages%2fo-GOSSIP-GIRL-FINAL-EPISODE-facebook.jpg&ehk=f%2be70SujYrTpoQQp8cfglbdlH2KPy%2b6fQD5Ta3K4%2f6g%3d&risl=&pid=ImgRaw&r=0"
           /> 
             <Chat
           name="Ali"
           message="hahah! you so funny"
           timestamp="45 minutes ago"
           profilePic="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
           /> 
        </div>
    )
}

export default Chats
