import './App.css';
import Footer from './components/footer'
import Header from './components/header';
import ListItems from './components/ListItems';

function App() {
  return (
    <div className='.container'>
      <Header />
      <div className='main-section'>
        <ListItems />
        <Footer />
      </div>
    </div>
  );
}

export default App;
