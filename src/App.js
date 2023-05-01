import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )  
}

export default App;
