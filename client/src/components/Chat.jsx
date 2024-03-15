// import React from 'react'
import { MultiChatSocket , MultiChatWindow , useMultiChatLogic } from 'react-chat-engine-advanced'
import Header from '@/components/CustomerHeader' ;
import StandardMessageForm from "@/components/CustomMessageForm"

const Chat = () => {

    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "azpes44@gmail.com",
        "Achippu077"
    )


  return (
    <div style={{flexBasis:"100%"}}>
     <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm= {(props) => {
            return (
                <StandardMessageForm props={props} activeChat={chatProps.chat} />
            )
        }}
        />
        

    </div>
  )
}

export default Chat