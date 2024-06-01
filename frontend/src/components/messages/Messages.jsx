import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../../skeletons/MessageSkeleton';

const Messages = () => {
  const {loading, messages} = useGetMessages();
  const lastMessageRef=useRef(null);

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:'smooth'})
    },100)
  },[messages]);
  
  return (
    <div className='px-4 flex-1 overflow-auto'>
        {loading && ([1,2,3].map((_,idx)=>(<MessageSkeleton key={idx} />)))}


        {!loading && messages.length>0 && messages.map((message)=>
          (
            <div key={message._id}
            ref={lastMessageRef}
            >
              <Message   message={message}/>
            </div>
          ))}
        
        
        {!loading && messages.length ===0 && (
          <p className='text-center'>Send a message to start the conversation</p>
        )}
        
    </div>
  )
}

export default Messages