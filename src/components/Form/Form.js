import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { db } from "../../firebaseConfig";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




const Formulary = ({ cart, total, clear, handleId }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')
    const [contact, setContact] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { name: name, phone: phone, contact: contact},
            items: cart,
            total: total,
            date: serverTimestamp()
        };
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order)
        .then((res) => {
            handleId(res.id)
            clear();
        })
    }
    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangePhone = (event) => {
        setPhone(event.target.value)
    }
    const handleChangeContact = (event) => {
        setContact(event.target.value)
    }

  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control 
                        type="text" 
                        placeholder='Name..'
                        name='nombre'
                        value={name} 
                        onChange={handleChangeName}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    type='text' 
                        placeholder='Phone' 
                        name='phone'
                        value={phone}
                        onChange={handleChangePhone}
                />   
            </Form.Group> 

            <Form.Group className="mb-3">
                <Form.Control 
                    type='text' 
                    placeholder='Mail'
                    name='contact'
                    value={contact}
                    onChange={handleChangeContact} 
            
                />
            </Form.Group> 

            <Button variant="outline-success" type='submit'  >Enviar</Button>
                
            
        </form>

    </div>
  )
}

export default Formulary;