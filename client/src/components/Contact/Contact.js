import './Contact.css';
import { useState } from 'react';
import PopupEdit from '../Popup/PopupEdit';
import { MdDelete, MdCreate } from "react-icons/md";
import Drop from '../Drop/Drop';

const Contact = ({ key, contact, deleteContact, updateContact }) => {

    const [updateTrigger, setUpdateTrigger] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
        <div className="contact-container">
            <div className="contact-visible" onClick={() => setVisible(!visible)}>
                <div className="contact-main">
                    <div className="contact-avatar" id="avatar"></div>
                    <div className="contact-name">
                        <p> {contact.name} </p>
                    </div>
                </div>
                <PopupEdit
                    updateContact={updateContact}
                    contact={contact}
                    updateTrigger={updateTrigger}
                    setUpdateTrigger={setUpdateTrigger}
                />
                <div className="contact-delete">
                    <h2>
                        <MdCreate
                            id="edit"
                            onClick={() => setUpdateTrigger(!updateTrigger)}
                        />
                    </h2>
                    <h2>
                        <MdDelete 
                            id="trash"
                            onClick={() => deleteContact(contact.id)}
                        />
                    </h2>
                </div>
            </div>
            <Drop
                contact={contact}
                visible={visible}
                setVisible={setVisible}    
            />
        </div>
    )
}

export default Contact;
