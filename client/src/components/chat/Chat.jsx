import React, { useState } from 'react';
import './chat.scss';

function Chat() {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <section className="messages">
        <h2>Messages</h2>
        <div className="message">
          <img src="./profile.jpg" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="message">
          <img src="./profile.jpg" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="message">
          <img src="./profile.jpg" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="message">
          <img src="./profile.jpg" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </section>
      {chat && (
        <section className="chatBox">
          <div className="top">
            <div className="user">
              <img src="./profile.jpg" alt="pdp" />
              John Doe
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMsg">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                consequatur!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMsg  own">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                consequatur!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMsg">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                consequatur!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMsg own">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                consequatur!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMsg">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                consequatur!
              </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
          </div>
        </section>
      )}
    </div>
  );
}

export default Chat;
