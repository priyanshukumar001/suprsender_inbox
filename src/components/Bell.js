import SuprSendInbox from '@suprsend/react-inbox';
import suprsend from "@suprsend/web-sdk";
import 'react-toastify/dist/ReactToastify.css'
import subscriberId from '../../utils/subscriber_id.js';
import { useIdentity } from '../../utils/globalVariables.js';
import dotenv from 'dotenv';
import { useState } from 'react';
dotenv.config();

suprsend.init(process.env.SUPRSEND_WORKSPACE_KEY, process.env.SUPRSEND_WORKSPACE_SECRET);


const Bell = () => {
    const [Istore, setIstore] = useState();
    const [id, setId] = useIdentity();

    const handlClick = () => {
        suprsend.reset();
        localStorage.setItem('id', "")
        setId('');
    }
    return ((id === '') ? (<></>) : (
        <>
            <SuprSendInbox
                workspaceKey={`${process.env.SUPRSEND_WORKSPACE_KEY}`}
                subscriberId={`${process.env.SUB_ID}`}
                distinctId={`${id}`}
                // hideToast={true}
                themeType='dark'
                theme={
                    {
                        bell: { color: '#45a29e' },
                        badge: { backgroundColor: '#66fcf1', color: '#0b0c10' },
                        header: { container: { backgroundColor: '#1f2833' }, headertext: { color: '#45a29e' }, markAllReadText: { color: 'cyan' } },
                        tabs: { color: 'white', unselectedColor: '#dedede', bottomColor: '#66fcf1', badgColor: '#45a29e', badgeText: '#0b0c10' }

                    }
                }
            />

            <button className='logout' onClick={handlClick}>Logout</button>
        </>
    ))
}

export default Bell;
