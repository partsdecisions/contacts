import './Contacts.css';
import Contact from '../Contact/Contact';
import Button from '../Buttons/Button';
import Popup from '../Popup/Popup';
import PopupUpload from '../Popup/PopupUpload';
import { useState } from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { VKShareButton, VKIcon } from 'react-share';
import { LinkedinShareButton, LinkedinIcon } from 'react-share';
import { CSVLink } from 'react-csv';
import { MdFileDownload, MdFileUpload } from 'react-icons/md';

const Contacts = ({ contacts, addContact, deleteContact, updateContact, files, setFiles}) => {

    const [trigger, setTrigger] = useState(false);
    const [uploadTrigger, setUploadTrigger] = useState(false);
    const [search, setSearch] = useState('');


    const updateSearch = e => {
        setSearch(e.target.value);
    }

    
    const headers = [
        {label: "ID", key: "id"},
        {label: "Name", key: "name"},
        {label: "Address", key: "address"},
        {label: "Number", key: "number"}
    ]

    return (
        <div>
            <div className="contacts-container">
                <div className="contacts-header">
                    <div> <h2> Contacts </h2> </div>
                    <div className="btn-download">
                        <MdFileUpload id="upload" onClick={() => setUploadTrigger(!uploadTrigger)}/>
                        <CSVLink id="download" data={contacts} headers={headers} style={{marginRight: 15}} filename={"contacts.csv"}>
                            <MdFileDownload/>
                        </CSVLink>
                        <Button
                            trigger={trigger}
                            setTrigger={setTrigger}
                        />
                    </div>
                </div>  
                <div className="search-container">
                    <form className="search-form" action="">    
                        <input className="search-bar" type="text" placeholder="Who are you looking for?"  onChange={updateSearch} required/>
                    </form>
                </div>
                <PopupUpload
                    files={files}
                    setFiles={setFiles}
                    uploadTrigger={uploadTrigger}
                    setUploadTrigger={setUploadTrigger}
                />
                <Popup
                    trigger={trigger}
                    setTrigger={setTrigger}
                    addContact={addContact}
                />
                <div className="contacts-body">
                    {contacts.filter((contact) => {
                        if (search == "") {
                            return contact;
                        } else if (contact.name.toLowerCase().includes(search.toLowerCase())) {
                            return contact;
                        }
                    }).map((contact, index) => (
                        <Contact
                            key={contact.id}
                            contact={contact}
                            trigger={trigger}
                            setTrigger={setTrigger}
                            deleteContact={deleteContact}
                            updateContact={updateContact}
                        />
                    ))}
                </div>
                <div className="social-share">
                    <FacebookShareButton
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    >
                        <FacebookIcon round={true} size={35}> </FacebookIcon>
                    </FacebookShareButton>
                    <VKShareButton
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    >
                        <VKIcon style={{margin: 10}} round={true} size={35}> </VKIcon>
                    </VKShareButton>
                    <LinkedinShareButton
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    >
                        <LinkedinIcon round={true} size={35}> </LinkedinIcon>
                    </LinkedinShareButton>
                </div>
            </div>
        </div>
        
    )
}

export default Contacts;
