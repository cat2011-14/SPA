import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs=(props)=>{

    let state = props.store.getState().dialogsPage;
    let dialogElement=state.dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>);

    let messElement=state.messages.map(m=><Message message={m.message} id={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick =() =>{
        props.store.dispatch(sendMessageCreator());
 
    }

    let onNewMessageChange =(e) =>{
       let body= e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>{messElement}</div>
                <div>
                    <div><textarea value={newMessageBody} 
                                    onChange={onNewMessageChange}
                                    placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;