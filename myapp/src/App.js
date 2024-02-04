import logo from './logo.svg';
import './App.css';
import MyCom from './Component/MyComponent'
import MyComClass  from './Component/MyComClass';
import MYComJSX from './Component/MYComJSX'
import MYCR from './Component/MYCR';
import MYFR from './Component/MYFR';
import Myname from './Component/Greet';
import Myname2 from './Component/Greet2'
import JsxR from './Component/JsxR';
import PropsC from './Component/PropsC';
import ProFR from './Component/PropFR'
import InputUser from './Component/my';
import Atul from './Component/Class';


let obj = {
  firstname:"Atul",
  lastname:"Chavan"
}

function App() {
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */

      <MyCom />
      <MyComClass />
      <MYComJSX />
      <MYCR />
      <MYFR />
      <Myname name="ATUL SANJAY CHAVAN" Age='56565'/>
      <JsxR/>
      <PropsC fn="Atul " ln="chavan"></PropsC>
      <ProFR name="Atul Chavan" lang="Javascript"></ProFR>
      <InputUser />
      <Atul/>
    </div>
  );
}

export default App;
