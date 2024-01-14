import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Body from './components/products/Body'
import mydata from  './utils/test_data.js'

function App() {
  //console.log(mydata);

  return (
    <>
      <Header logo="logo192.png" />
      <Body data={mydata}/>
    </>
  );
}

export default App;
