import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import Modal from "./Components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, getCardItem } from "./features/cart/cartSlice";
import { useEffect } from "react";
import cartItems from "./cartItems";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  // console.log('open',isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal);
  }, [cartItems]);
  useEffect(()=>{dispatch(getCardItem)},[]);

  if(isLoading){
    return (<div className="loading">
      <h1>loading....</h1>
    </div>)
  }
  return (
    <div>
      {isOpen && <Modal />}

      <Navbar />
      <h2>Redux Toolkit</h2>

      <CartContainer />
    </div>
  );
}

// <div><h2>Redux Toolkit</h2>
// <p>hi</p></div>

export default App;
