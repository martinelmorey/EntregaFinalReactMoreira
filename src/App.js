import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CustomProvider from './providers/CustomProvider';
import CartProvider from './providers/CartProvider';
import FavProvider from './providers/FavProvider';



function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
        <CartProvider>
          <FavProvider>
            <Header />
            <Main />
            <Footer />
          </FavProvider>
        </CartProvider>
      </CustomProvider>
    </BrowserRouter>
  )  
}

export default App;
