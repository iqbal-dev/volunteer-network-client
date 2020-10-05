import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AddEvent.css'

const AddEvent = () => {
    const history = useHistory()
    const addEventStyle = {
        width: '95%',
        margin: '0 auto',
        backgroundColor: 'white',
        boxSizing: 'border-box',
    }
    
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const storeData = { title: data.title, description: data.description, date: data.date };
        fetch('https://glacial-oasis-27688.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(storeData)
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            history.push('/')
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={addEventStyle} id="addEvent" className="row justify-content-between">
            <div className="col-md-5">
                <label for="title">Event Title</label>
                <input type="text" name="title" id="title" ref={register({ required: true })} placeholder="Event title"/>
                <label for="description">Event Description</label>
                <input type="text" name="description" ref={register({ required: true })} id="description" placeholder="Event Description"/>
            </div>
            <div className="col-md-5">
                <label for="date">Event Date</label>
                <input type="date" name="date" ref={register({ required: true })} id="date" placeholder="Event date"/>
                <label for="img">Banner</label>
                <input type="file" accept="image/*" name="img" id="img" placeholder="Event title" />
                <button style={{border: "none",borderRadius:'5px',padding:'5px 15px'}} className="bg-primary text-white" type="submit">Submit</button>
            </div>
        </form>
    );
};

export default AddEvent;