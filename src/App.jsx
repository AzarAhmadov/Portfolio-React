import '../src/css/App.css';
import BounceLoader from "react-spinners/BounceLoader";
import Footer from './components/home/Footer';
import Header from './components/home/Header';
import Home from './components/home/Home'
import MobilMenu from './components/home/MobilMenu';
import UpBtn from './components/home/UpBtn';
import GlobalContextProvider from './components/context/Context';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {
        loading ?
          <div className='animate'>
            <BounceLoader
              loading={loading}
              size={100}
              color={'#6c55e0'}
            />
          </div>
          :
          <GlobalContextProvider>
            <Header />
            <Home />
            <Footer />
            <MobilMenu />
          </GlobalContextProvider>
      }
      <UpBtn />
    </>
  );
}

export default App;
