import { createContext, useState } from 'react';
import swal from 'sweetalert';


export const FavContext = createContext();
export const { Provider } = FavContext;

const FavProvider = ({ children }) => {
  const [favItems, setFavItems] = useState([]);

  const addToFav = (product) => {
    const id = product.id;
  
    if (isItemInFav(id)) {
      swal("El producto ya se encuentra en la lista de favoritos")
    } else {
      setFavItems([...favItems, { ...product }]);
    }
    
  };

  const isItemInFav = (id) => {
    return favItems.some((item) => item.id === id);
  };

  const removeItemFav = (id) => {
    const updatedFav = favItems.filter((item) => item.id !== id);
    setFavItems(updatedFav);
  };

  const emptyFav = () => {
    setFavItems([]);
  };

  

  return (
    <Provider
      value={{
        favItems,
        addToFav,
        removeItemFav,
        emptyFav,
        isItemInFav
      }}
    >
      {children}
    </Provider>
  );
};

export default FavProvider;
