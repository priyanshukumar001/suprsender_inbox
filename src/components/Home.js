import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Inbox_main from "./Inbox_main";
import { useIdentity } from "../../utils/globalVariables";
import TextAnimate from "../../utils/TextAnimate";
import suprsend from "@suprsend/web-sdk";
suprsend.init(process.env.SUPRSEND_WORKSPACE_KEY, process.env.SUPRSEND_WORKSPACE_SECRET);

import dotenv from 'dotenv';
dotenv.config();



const Home = () => {
    const [email, setEmail] = useState('');
    const [id, setId] = useIdentity();

    useEffect(() => {
        TextAnimate('welcome');
    }, [])
    return ((id !== "") ? (<Inbox_main />) : (
        <>
            <div className="body">
                <h1 id="welcome"> Welcome </h1>

                <p className="text">Enter your unique_id</p>
                <input type="email" id="id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="submit"
                    onClick={(e) => {

                        if (email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i)) {
                            // setId(email);
                            localStorage.setItem('id', email);
                            const api = `${process.env.Int_Assign}`;
                            const options = {
                                method: 'POST',
                                headers: {
                                    accept: 'application/json',
                                    'content-type': 'application/json',
                                    Authorization: `Bearer ${api}`
                                },
                                body: JSON.stringify({
                                    distinct_id: `${email}`,
                                    $user_operations: [{ $append: { "$email": `${email}` } }]
                                })
                            };

                            fetch('https://hub.suprsend.com/event/', options)
                                .then(response => response.json())
                                .then(response => {
                                    console.log(response);
                                })
                                .catch(err => console.error(err));
                            setEmail('');
                            const existingValue = localStorage.getItem('id')
                            setId(existingValue);
                            suprsend.identify(existingValue);
                            suprsend.track("user_login");
                        }
                        else window.alert("enter valid email");

                    }}
                >Submit</button>
            </div>
        </>
    ))
}

export default Home;
