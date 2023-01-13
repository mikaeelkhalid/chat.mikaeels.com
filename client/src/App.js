import './App.css';
import './normalize.css';

function App() {
  return (
    <div className='App'>
      <aside className='sidemenu'>
        <div className='side-menu-button'>
          <span>+</span>
          New chat
        </div>
      </aside>
      <section className='chatbox'></section>
    </div>
  );
}

export default App;

