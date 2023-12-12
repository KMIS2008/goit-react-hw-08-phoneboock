import {Contact,
        ButtonDelete} from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selects';
// import { removeContact } from 'redux/contactSlice';
import { deleteContact } from 'redux/operations';

export const ContactsList = ()=>{
    const contacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();
    const removeButton = (contactId)=>dispatch(deleteContact(contactId));
//  console.log(contacts)
    
    return (
        <ul>
            {contacts.map((contact)=>{
                return (
                  <Contact key={contact.id}>{contact.name}:  {contact.number}

                  <ButtonDelete type='button' onClick = {()=>removeButton(contact.id)}>Delete</ButtonDelete>
                  </Contact>
                )
            })}
        </ul>
    )
}