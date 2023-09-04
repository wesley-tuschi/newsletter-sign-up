import iconList from './assets/images/icon-list.svg';
import illustration from './assets/images/illustration-sign-up-desktop.svg';
import './App.css';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-md-6">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <p><img src={iconList} alt="iconlist" /> Product discovery and building what matters</p>
          <p><img src={iconList} alt="iconlist" /> Measuring to ensure updates are a success</p>
          <p><img src={iconList} alt="iconlist" /> And much more!</p>
          <section>
            <form>
              <label htmlFor="email">Email address</label>
              <input type="email" placeholder="email@company.com" />
              <button>Subscribe to monthly newsletter</button>
            </form>
          </section>
        </div>
        <div className="col-md-6">
          <img src={illustration} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default App;
