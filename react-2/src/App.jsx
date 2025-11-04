import './App.css'
import ProfileCard from './ProfileCard'

function App() {

  // const person = {name: "Ram", age: 30};
       //Without destructuring
  // const name=person.name;
  // const age=person.age;
       //With destructuring
  // const {name, age} = person; 

  // const hobby1=['Reading','Coding','Travelling'];
  
  const handleHobbyClick = (hobby) => {
    alert(`You clicked on hobby: ${hobby}`);
  };

  const AniketProfile = {
    name: "Aniket Gupta",
    age: 21,
    isMember: true,
    hobbies: ['Painting', 'Dancing', 'Singing'],
    onHobbyClick: handleHobbyClick
  };  

  const AmanProfile = {
    name: "Aman Singh",
    age: 25,
    isMember: false,
    hobbies: ['Gaming', 'Cooking', 'Hiking'],
    onHobbyClick: handleHobbyClick
  };

  return (
    <div className='app-container'>
      <ProfileCard {...AniketProfile}/>
      <ProfileCard {...AmanProfile }/>
    </div>
  );
}

export default App
