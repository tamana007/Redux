import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import Modal from "./Components/Modal";
import { useDispatch, useSelector} from "react-redux";

function App() {
  
  const { isOpen } = useSelector((store) => store.modal);
  console.log('open',isOpen);
  const dispatch=useDispatch();
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
