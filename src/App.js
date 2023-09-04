import iconList from './assets/images/icon-list.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Stay updated!</h1>
      <p><img src={iconList} alt="iconlist" /> Join 60,000+ product managers receiving monthly updates on:</p>
      <p><img src={iconList} alt="iconlist" /> Product discovery and building what matters</p>
  <p><img src={iconList} alt="iconlist" /> Measuring to ensure updates are a success</p>
  <p><img src={iconList} alt="iconlist" /> And much more!</p>
  <section>
    <form>
    <label for="email">Email adress</label>
      <input type="email" placeholder="email@company.com" />
      <button>Subscribe to monthly newsletter</button>
      </form>
  </section>
    </div>
  );
}

export default App;
