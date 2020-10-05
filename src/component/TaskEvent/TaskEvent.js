import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import Header from '../Headers/Header';

const TaskEvent = () => {
    const btnStyle = {
        width: '100px',
        marginLeft: '100px',
        padding: '8px 15px',
        backgroundColor: '#E3E3E3',
        borderRadius: '5px',
        border:'none'
    }
    const[user, setUser ] = useContext(Context)
    const[volunteerDetail, setVolunteerDetail] = useState([])

    useEffect(() => {
        fetch('https://glacial-oasis-27688.herokuapp.com/eventTask?email=' + sessionStorage.getItem('email'))
        .then(res => res.json())
            .then(data => {
                console.log(data)
            setVolunteerDetail(data)
        })
    }, [user.email])

    const handleCancel = (id) => {
        console.log(id)
        fetch(`https://glacial-oasis-27688.herokuapp.com/cancel/${id}`, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data => {
            console.log(data)
            })
            window.location.reload();
    }
    return (
        <div style={{background: '#F8FAFC',height:'100%'}}>
            <div className="container">
                <Header></Header>
                <div className="row justify-content-center">
                {
                volunteerDetail.map(task => <div className="col-md-5 bg-white m-4" style={{width:'50%'}}>
                    <div className="m-3 row justify-content-between">
                        <img className="col-md-6" style={{height:'175px',width:'200px'}}   alt=""/>
                        <div className="col-md-6 d-flex flex-column ">
                            <h4 >{task.title}</h4>
                            <p>{task.date}</p>
                            <button onClick={()=>handleCancel(task._id)} className="align-items-end mt-auto" style={btnStyle}>Cancel</button>
                        </div>
                    </div>
                </div>)
            }
                </div>
         </div>
        </div>
    );
};

export default TaskEvent;