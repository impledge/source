import {useState} from 'react';
import { MailIcon } from '@heroicons/react/solid'

/**
 * @name ContactForm
 * @description
 * @returns
 * 
 * TODO:
 * https://dev.to/markdrew53/integrating-sendgrid-with-next-js-4f5m
 * Update fetch with new sengrid conf 
 * edit styles for email component -> .container
 */


export default function ContactForm(props) {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setEmail((value) => {
            value == event.target.value;
        })

        fetch("api/contact", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email
            })
        })
        .then(res => res.json())
        .then((myJson) => {console.log(myJson)})
        .catch((err) => {console.log(err)});
    }
    
    return (
        <div className="container">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                onChange={handleSubmit}
                type="text"
                name="email"
                id="email"
                value={email}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
                />
            </div>
        </div>
    )
}