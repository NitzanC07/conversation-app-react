import './app.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    }
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = '';
  }

  return (
    <div className="app">
      <Header/>
      <Main />
      <Footer />
    </div>  
  );
}

export default App;
