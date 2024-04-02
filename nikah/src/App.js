import './App.css';
import Cover from './pages/Cover'
import Header from './pages/Header'
import Name from './pages/Name'
import Countdown from './pages/Countdown'
import Acara from './pages/Acara'
import Gift from './pages/Gift'
import Footer from './pages/Footer'


function App() {
  return (
    <div className="wrapper">
      <Cover />
      <Header />
      <Name />
      <Countdown />
      <Acara />
      <Gift />
      <Footer />
    </div>
  );
}

export default App;
