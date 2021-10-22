import { useEffect } from 'react';
import './App.css';
import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import { useActionCreators } from './hooks/useAC';
import { IOrder } from './types/order';

function App() {
  const { setOrders, setTotalPriceAction } = useActionCreators()
  useEffect(() => {
    const orders = localStorage.getItem('orders') || '[]';
    const json = JSON.parse(orders) as IOrder[]
    if (json.length>0) {
      setOrders(json);
      setTotalPriceAction()
    }
  }, [])


  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
