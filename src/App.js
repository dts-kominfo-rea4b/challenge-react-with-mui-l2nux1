import './App.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';

import { Grid } from '@mui/material';

import { useState } from 'react';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm  

  const [contacts, setContacts] = useState(contactsJSON);

  const handleClick = (contact) => {
    setContacts([...contacts, contact]);    
  }

  return (
    <div className="App">
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Header /> 
        </Grid>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item>
            <ContactForm handleClick={handleClick} />
          </Grid>
          <Grid item>
            <Contact data={contacts} />
          </Grid>  
        </Grid>
        
      </Grid>      
    </div>
  );
};

export default App;
