import React from 'react';
import './App.css';
import Alert from './alert'
import photo from './tasnim.jpg';
import Button from './Button'
import Title1 from './Title1';

const person={
  phot: photo,
  name:
    {
      firstname:"Nadim",
      lastname:"Chihaoui"
    },
  button:
    {
      facebook:"facebook",
      linkedIn:"LinkedIn"
  
    },
    profilelink:"https://www.facebook.com/"
}

function App() {
  return (
   <div className="App">

<Alert imga={person.phot} />
<Title1 firstname={person.name.firstname} lastname={person.name.lastname}/>
  

<Button btn={person.button.facebook} onSimpleClick={()=>
                {window.location=person.profilelink}}/>

<Button btn={person.button.linkedIn} onSimpleClick={()=>
                {window.location=person.profilelink}}/>

</div>
  );
}

export default App;
