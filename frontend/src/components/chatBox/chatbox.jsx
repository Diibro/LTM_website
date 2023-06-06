import {BsChatQuoteFill} from 'react-icons/bs';
import {RxCross2} from 'react-icons/rx';
import { useState, useRef} from 'react'; 

const Chatbox = () => {
     const [chats, setChats] = useState([{
          sender: "support",
          message: "Hello feel free to reach our support team"
     }]);
     const [message, setMessage] = useState("");
     const [chatBox, setChatBox] = useState(0);

     const chatBtnRef = useRef(null);
     const chatBoxRef = useRef(null);

      const handleSend = (e) => {
          e.preventDefault();
          const chat = {
               sender: "client",
               message: message
          }
          setChats([...chats, chat]);
          setMessage("");
     }

     const handleChatBox = () =>{
          if(chatBox === 0){
               setChatBox(1);
               chatBtnRef.current.style.display = "none";
               chatBoxRef.current.style.display = "flex"
          }else if(chatBox == 1){
               setChatBox(0);
               chatBtnRef.current.style.display = "flex";
               chatBoxRef.current.style.display = "none";
          }
     }
  return (
     <>
          <div className="chat-box" ref={chatBoxRef}>
               <div className="chat-box-header">
                    <h3>Live chat</h3>
                    <button onClick={handleChatBox}><RxCross2/></button>
               </div>
               <div className="chat-area">
                    {chats.map((chat, index) => ( chat.sender === "client" ? <div key={index} className='client-message' ><p>{chat.message}</p></div> : <div key={index} className='support-message' ><p>{chat.message}</p></div>))}
               </div>
               <div className="input-container">
                    <input type="text"  placeholder='Type your message' value={message} required onChange={e => setMessage(e.target.value)} />
                    <button onClick={handleSend} >Send</button>
               </div>
          </div>
          <button ref={chatBtnRef} className='chat-icon' onClick={handleChatBox} ><BsChatQuoteFill/></button>
     </>
  )
}

export default Chatbox;