import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
   const chatProps = useMultiChatLogic(
    'dfaea1d7-abf6-48d4-9f49-19c976769ea9',
    props.user.username,
    props.user.secret
   );
   return (
    <div style={{ height: '100vh'}}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
    </div>
   )
  };
  
  export default ChatsPage;