import React, { useEffect, useState } from 'react';
import Header from '../Headers/Header';
import Volunteer from '../Vounteer/Volunteer';
import './Home.css'
const Home = () => {
    const h3Style = {
        margin: '50px 0',
        fontSize: '36px',
        lineHeight: '44px',
        fontWeight: '700'
  }


  const [volunteer, setVolunteer] = useState([]);
  useEffect(() => {
    fetch('https://glacial-oasis-27688.herokuapp.com/getVolunteer')
      .then(res => res.json())
      .then(data => {
      setVolunteer(data)
    })
  },[])
    return (
        <div>
            <Header admin={true}></Header>
            <h1 style={h3Style}>I GROW BY HELPING PEOPLE IN NEED.</h1>
            <div className="form">
            <form action="/search" method="post">
                <input type="text" className="rounded-left" name='search' placeholder="Search..." id="search"/>
                <input className="bg-primary rounded-right" type="submit" value="Search"/>
            </form>
           </div>
            <div className="container ">
                <div className=" row justify-content-between">
                {
                volunteer.map(task =><Volunteer task ={task}></Volunteer>)
            }
             </div>
            </div>
        </div>
    );
};

export default Home;