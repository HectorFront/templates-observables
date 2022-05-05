import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

/** Observable with Class instance */
import {Observable} from "./observables/observable";
/** Observable with id */
import {ObservableGlobal} from "./observables/observableGlobal";

import {Listener} from "./listener";
import {ListenerWithId} from "./listenerWithId";

export const _ObservableCount = new Observable();
export const _ObservableGlobal = ObservableGlobal;

function App() {

  useEffect(() => {
      let sum = 1;
      let delay_1 = null;
      let delay_2 = null;

      setInterval(() => {
          delay_2 = setTimeout(() => {

              // Observable notify with listener id //
              _ObservableCount.notify('listener_id', sum);
              // ==================================== //

              clearTimeout(delay_2);
          }, 1000);
          delay_1 = setTimeout(() => {

              // Observable notify with event id //
              _ObservableGlobal.notify('id_event', sum);
              // ==================================== //

              clearTimeout(delay_1);
          }, 1500);
      },1000);
  },[]);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Listener/>
            <ListenerWithId/>
          </div>
          <p
              className="App-link"
          >
            Observables
          </p>
        </header>
      </div>
  );
}

export default App;
