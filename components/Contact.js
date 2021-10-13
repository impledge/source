import React, {useState} from 'react';
import { MailIcon } from '@heroicons/react/solid'


export default function ContactForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setEmail((email) => {
            email == event.target.value;
        })

        // fetch() ... set this to call api route
    }
    
    return (
        <div>
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
                id={email}
                value={value}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
                />
            </div>
        </div>
    )
}