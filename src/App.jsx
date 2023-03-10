import '../src/css/App.css';
import BounceLoader from "react-spinners/BounceLoader";
import Footer from './components/home/Footer';
import Header from './components/home/Header';
import Home from './components/home/Home'
import GlobalContextProvider from './components/context/Context';
import UpBtn from './components/home/UpBtn'
import { useState, useEffect } from 'react';
import MobilMenu from './components/home/MobilMenu';

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
              size={150}
              color={'#6c55e0'}
            />
          </div>
          :
          <GlobalContextProvider>
            <MobilMenu />
            <Header />
            <Home />
            <Footer />
          </GlobalContextProvider>
      }
      <UpBtn />
    </>
  );
}

export default App;
