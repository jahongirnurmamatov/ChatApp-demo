import { useState } from "react";
import useConversation from "../zustand/useConversation";
import {toast} from 'react-hot-toast';
const useSendMessage = () => {
  const [loading,setLoading]=useState(false);
  const {selectedConversation,messages,setMessages }= useConversation();

  const send=async(message)=>{
    setLoading(true);
    if(message.legth===0) return;
    try {
        const res = await fetch(`/api/messages/send/${selectedConversation?._id}`,{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        };
        setMessages([...messages,data]);


    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
  }
  return {loading, send}
}

export default useSendMessage