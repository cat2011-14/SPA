const UPDATE_NEW_MESSAGE_BODY ='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState={
        dialogs :[
                {id:1, name:'Sergey'},
                {id:2, name:'Andrey'},
                {id:3, name:'Sveta'},
                {id:4, name:'Sacha'},
                {id:5, name:'Viktor'},
                {id:6, name:'Valera'},
            ],
            messages : [
                {id:1, message:'Hi'},
                {id:2, message:'How are you'},
                {id:3, message:'Yo'},
                {id:4, message:'Yo'},
                {id:5, message:'You'},
            ],
            newMessageBody:''
};
const dialogsReducer=(state=initialState,action)=>{

    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
                state.newMessageBody=action.body;
                return state;
        case SEND_MESSAGE:
                let body = state.newMessageBody;
                state.newMessageBody='';
                state.messages.push({id:6, message:body});
                return state;
        default:
                return state;

    }
}

export const sendMessageCreator =()=>({type: SEND_MESSAGE})
  
export const updateNewMessageBodyCreator=(body)=>
        ({type: UPDATE_NEW_MESSAGE_BODY , body: body})
  
export default dialogsReducer;
