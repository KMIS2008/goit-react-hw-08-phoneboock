import { GlobalStyle } from './GlobalStyle';
import {FormAddContact} from './FormAddContact/FormAddContact';
import {SectionTitle} from './SectionTitle/SectionTitle';
import {ContactsList} from './Contacts/Contacts';
import {FilterConctacts} from './Filter/Filter';
import {TitleContacts,
        Contater} from './App.styled';
import {useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/selects';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';


    export const App =()=> {
      const error = useSelector(selectError);
      const isLoading = useSelector(selectIsLoading);
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);
    
      return (

        <Contater>

           {isLoading && (<p>...isLoading</p>) }
           {error && (<p>Error</p>)}

           <SectionTitle title="Phonebook"/>
    
           <FormAddContact/>
       
           <TitleContacts>Contacts</TitleContacts>
    
           <FilterConctacts/>
        
           <ContactsList/>
      
           <GlobalStyle/>
    
        </Contater>
      );
    };
    
