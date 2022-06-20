import logo from './logo.svg';
import './App.css';
import {PruebasComponent} from './components/PruebasComponent';
import {AjaxPromiseComponent} from './components/AjaxPromiseComponent'
import {AjaxFetchComponent} from './components/AjaxFetchComponent';
import { AjaxAsAwComponent } from './components/AjaxAsAwComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <hr></hr>
        <PruebasComponent></PruebasComponent>
        <hr></hr>
        <AjaxPromiseComponent></AjaxPromiseComponent>
        <hr></hr>
        <AjaxFetchComponent></AjaxFetchComponent>
        <hr></hr>
        <AjaxAsAwComponent></AjaxAsAwComponent>
      </header>
    </div>
  );
}

export default App;
