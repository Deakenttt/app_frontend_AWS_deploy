import React from "react"
import { deleteFromAPI } from "../utils/deleteFromAPI";
const ContactList = ({ contacts, updateContact, updateCallback }) => {

    const onDelete = async (id) => {
        // using axios instead of fetch
        try {
            const response = await deleteFromAPI(`delete_contact/${id}`);
            console.log('Success:', response);
            if(response.status !== 201 && response.status !== 200){
                console.log("request ERROE!");
            }
            else{
                updateCallback()
            }
          } catch (error) {
            // Handle the error
            console.error('An error occurred:', error);
          }
          
    }

    return <div>
        <h2>Contacts</h2>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.email}</td>
                        <td>
                            {/* in App.jsx, everytime we rendering we set the following contact using stContact() */}
                            <button onClick={() => updateContact(contact)}>Update</button>
                            <button onClick={() => onDelete(contact.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default ContactList