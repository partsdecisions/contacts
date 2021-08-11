import './Popup.css';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

import React from 'react'

const PopupEdit = ({ updateTrigger, setUpdateTrigger, updateContact, contact}) => {

    const [name, setName] = useState(contact.name);
    const [address, setAddress] = useState(contact.address);
    const [number, setNumber] = useState(contact.number);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!name) {
            alert('Please insert a name');
            return
        } else if (!number) {
            alert('Please insert a number');
            return
        }
        setUpdateTrigger(!updateTrigger);
        window.location.reload();
        updateContact(contact.id, name, address, number);
        setName('');
        setAddress('');
        setNumber('');
    }

    return (updateTrigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-header">
                    <div className="popup-title">
                        <h2> Edit Conctact </h2>
                    </div>
                    <div>
                        <h2>
                            <FaTimes
                                style={{ color: 'grey', alignItems: 'center'}}
                                onClick={() => setUpdateTrigger(!updateTrigger)}
                                id="close"
                                
                            />
                        </h2>
                    </div>
                </div>
                <div className="popup-form">
                    <form className="add-form" onSubmit={onSubmit}>
                        <div className="form-control">
                            <label>Name</label>
                            <input type="text" placeholder="Add Name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label>Address</label>
                            <input type="text" placeholder="Insert Address" 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label>Number</label>
                            <input type="text" placeholder="Add Number" 
                                value={number} 
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <input type="submit" value="Save" className="sbm-btn"/>
                    </form>
                </div>
            </div>
        </div>
    ) : ""
}

export default PopupEdit;
