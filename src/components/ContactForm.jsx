
import { useState } from "react";
import { createFromAPI } from "../utils/createFromAPI";
import { updateFromAPI } from "../utils/updateFromAPI";

// set the existingContact to empty object, we pass the current contact in App.jsx
const ContactForm = ({ existingContact = {}, updateCallback }) => {
    // if existingContact is not null, we use its current info
    const [firstName, setFirstName] = useState(existingContact.firstName || "");  // set use state 
    const [lastName, setLastName] = useState(existingContact.lastName || "");
    const [email, setEmail] = useState(existingContact.email || "");

    // if existingContact = {} we create one, if existingContact = something we edit it and update
    const updating = Object.entries(existingContact).length !== 0
    
    const onSubmit = async (e) => {
        e.preventDefault()
        
        const data = {
            firstName,
            lastName,
            email
        }
        let response = null;
        if (updating) {
            // Do update
            response = await updateFromAPI(`update_contact/${existingContact.id}`, data);
            console.log('Success:', response);
        } else {
            // Do create
            response = await createFromAPI('create_contact', data);
            console.log('Success:', response);
        }
        // check does the request pass in backend API (server)
        console.log(`the status is: ${response.status}`);
        if (response.status !== 201 && response.status !== 200) {
            console.log("request ERROE!");
        } else {
            updateCallback()
        }
    }

    // call the libray from node.js
    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
        {/* <form > */}
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                // the data and date formate user entered (first name)
                    type="text"
                    id="firstName"
                    // the value: firstName is a local variable in useState() 
                    value={firstName}
                    onChange={handleFirstName}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">{updating ? "Update" : "Create"}</button>
        </form>
    );
};

export default ContactForm