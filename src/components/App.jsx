import ContactForm from './ContactsForm/ContactsForm';
import ContactList from './ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import style from './App.module.css';

function App() {
  return (
    <div className={style['App']}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
