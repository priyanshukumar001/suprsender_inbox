import suprsend from "@suprsend/web-sdk";
import dotenv from 'dotenv';
import { useIdentity } from "../../utils/globalVariables";
import { Navigate } from "react-router-dom";
dotenv.config();
suprsend.init(process.env.SUPRSEND_WORKSPACE_KEY, process.env.SUPRSEND_WORKSPACE_SECRET);


const InboxMain = () => {
    const [id, setId] = useIdentity();

    const addElement = () => {
        const property_box = document.getElementById('property-box');
        const property = document.createElement('div');
        property.className = "property";
        const input_key = document.createElement('input');
        input_key.type = "text";
        input_key.className = "key-value";
        input_key.placeholder = "key";
        property.appendChild(input_key);
        const input_val = document.createElement('input');
        input_val.type = "text";
        input_val.className = "key-value";
        input_val.placeholder = "value"
        property.appendChild(input_val);
        property_box.appendChild(property);
    }

    const handlClick = () => {
        const property = document.getElementsByClassName('property');
        const last_element = property[property.length - 1];
        const inputs = last_element.querySelectorAll('.key-value');
        const key = inputs[0];
        let key_v = key.value;
        const value = inputs[1];
        let value_v = value.value;
        // const obj = JSON.stringify({ "key": key, "value": value });
        const obj = { "key": `${key_v}`, "value": `${value_v}` };

        // const obj = { key_v, value_v };

        suprsend.user.set_once(key_v, value_v);
        suprsend.track("property_update", obj);
        // console.log(last_element);
        addElement();
    }

    return ((id === '') ? (<Navigate to="/ " />) :
        <>
            <h2 style={{ padding: "1em auto", color: "white", textAlign: 'center' }}>You are in.....!</h2>
            <div className="InboxContainer">
                <div id="property-box">
                    <div className="property">
                        <input className="key-value" type="text" placeholder="key" />
                        <input className="key-value" type="text" placeholder="value" />
                    </div>
                </div>
                <button className="submit" onClick={handlClick}>Add property</button>
            </div>



        </>
    )

}

export default InboxMain;