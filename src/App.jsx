import '../src/css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/home/Home'
import MobilMenu from './components/MobilMenu';
import UpBtn from './components/UpBtn';
import GlobalContextProvider from './components/context/Context';

function App() {
  return (
    <GlobalContextProvider>
      <UpBtn />
      <Header />
      <Home />
      <Footer />
      <MobilMenu />
    </GlobalContextProvider>
  );
}

export default App;
