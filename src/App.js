import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard.js/Dashboard';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Dashboard />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
