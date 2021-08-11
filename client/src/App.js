import { useState, useEffect } from 'react';
import Contacts from './components/Contacts/Contacts';


function App() {
  const [contacts, setContacts] = useState([]);
  const [files, setFiles] = useState([]);

  // Load in the Contacts from the DB on page landing
  useEffect(() => {
    const getContacts = async () => {
      const contactsFromServer = await fetchContacts();
      console.log(contactsFromServer);
      setContacts(contactsFromServer);
    }
    getContacts();
  }, [])

  // Get contacts from server
  const fetchContacts = async () => {
    const res = await fetch('getContacts');
    const data = await res.json();
    console.log(data);
    return data;
  }

  // Add Contacts
  const addContact = async (name, address, number) => {
    const res = await fetch('addContact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({name : name, address : address, number : number}),
    });
    console.log(res);
  }

  // Delete Contacts
  const deleteContact = async (id) => {
    const res = await fetch(`deleteContact/${id}`, {
      method: 'DELETE'
    });
    console.log(res);
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  // Update Contacts
  const updateContact = async (id, name, address, number) => {
    const res = await fetch(`updateContact/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({name : name, address : address, number : number})
    });
    console.log(res);
  }

  return (
    <div className="App">
      <Contacts
        contacts={contacts}
        addContact={addContact}
        deleteContact={deleteContact}
        updateContact={updateContact}
        files={files}
        setFiles={setFiles}
      />
    </div>
  );
}

export default App;
