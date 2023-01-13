import './App.css';
import './normalize.css';
import logo from './img/logo.png';

function App() {
  return (
    <div className='App'>
      <aside className='sidemenu'>
        <div className='side-menu-button'>
          <span>+</span>
          New chat
        </div>
      </aside>
      <section className='chatbox'>
        <div className='chat-log'>
          <div className='chat-message'>
            <div className='chat-message-center'>
              <div className='avatar'></div>
              <div className='message'>message</div>
            </div>
          </div>

          <div className='chat-message chatgpt'>
            <div className='chat-message-center'>
              <div className='avatar chatgpt'></div>
              <div className='message'>ai</div>
            </div>
          </div>
        </div>
        <div className='chat-input-holder'>
          <textarea row='1' className='chat-input-textarea'></textarea>
        </div>
        <footer className='footer'>
          <p>ChatGPT - Mikaeels</p>
        </footer>
      </section>
    </div>
  );
}

export default App;

