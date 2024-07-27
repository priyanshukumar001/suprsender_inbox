import { createContext, useContext, useState } from "react";

//create context
const Distinct_id = createContext();
//create a provider component
const IdProvider = ({ children }) => {
    const [id, setId] = useState('');
    return (
        <Distinct_id.Provider value={[id, setId]}>
            {children}
        </Distinct_id.Provider>
    )
};

//custom hook to use the GlobalContext
const useIdentity = () => useContext(Distinct_id);

export { IdProvider, useIdentity };