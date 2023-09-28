import FoodDescr from '../components/FoodDescr/FoodDescr';
import Categories from '../components/Categories/Categories';
import Card from '../components/Card/Card';
import Skeleton from '../components/Skeleton/Skeleton';
import { useEffect, useState,useContext } from 'react';
import { AppContext } from '../App';

const Home = () => {
  const [items, setItems] = useState([]);
  const [cartItems,setCartItems]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(0);

  const search=useContext(AppContext)

  useEffect(() => {
    if (active === 0) {
      fetch('https://6502fea4a0f2c1f3faeb4142.mockapi.io/FoodItems')
        .then((res) => res.json())
        .then((res) => {
          setItems(res);
          setIsLoading(false);
        });
    } else {
      fetch('https://6502fea4a0f2c1f3faeb4142.mockapi.io/FoodItems?category=' + active)
        .then((res) => res.json())
        .then((res) => {
          setItems(res);
          setIsLoading(false);
        });
    }


      fetch('https://6502fea4a0f2c1f3faeb4142.mockapi.io/CartItems')
        .then((res) => res.json())
        .then((res) => {
          setCartItems(res);
        });

  }, [active]);


  const onAddToCart = (obj) => {
    fetch('https://6502fea4a0f2c1f3faeb4142.mockapi.io/CartItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  
  return (
    <>
      <FoodDescr />
      <Categories
        value={active}
        onClickActive={(i) => {
          setActive(i);
        }}
      />
      <h1>Рестораны в Москве</h1>
      <div class="menu__cards">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((obj) => obj.title.toLowerCase().includes(search.searchValue.toLowerCase()))
              .map((obj) => <Card onAddToCart={onAddToCart}  key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
export default Home;





