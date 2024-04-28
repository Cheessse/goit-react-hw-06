import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilterName } from "../../redux/filtersSlice";

const ContactList = () => {
  const allContacts = useSelector(selectContacts);
  const filterName = useSelector(selectFilterName);

  const filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
