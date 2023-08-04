import React, { useState } from "react";

import { styles } from "../styles";

import EmailForm from "./EmailForm";
import ChatEngine from "./ChatEngine";

const ChatUser = (props) => {
  const [user, setUser] = useState(null);
  const [chat, setChat] = useState(null);

  return (
    <div
      className="transition-5"
      style={{
        ...styles.supportWindow,
        ...{ display: props.visible ? "" : "none" },
        zIndex: "1000",
      }}
    >
      <EmailForm
        visible={user === null || chat === null}
        setUser={(user) => setUser(user)}
        setChat={(chat) => setChat(chat)}
      />

      <ChatEngine
        visible={user !== null && chat !== null}
        user={user}
        chat={chat}
      />
    </div>
  );
};

export default ChatUser;
