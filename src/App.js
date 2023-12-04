import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Sheader from './components/sub-header/sheader';
import Main from './components/main/main';

function App() {
  return (
    <>
    <div className="app">

      <Header/>
      <Sheader/>
      <Main/>
    </div>
    </>
  );
}

export default App;
