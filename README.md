# Templates observables (Examples with React)

<img alt="VanillaJS <- RxJS" width="100%" height="auto" src="https://media.discordapp.net/attachments/794015985450352661/971613707127906374/Frame_2_5.png?width=1340&height=671"/>

## Observable Global

Notify with event id

```javascript
import {ObservableGlobal} from "./observables/observableGlobal";
export const _ObservableGlobal = ObservableGlobal;

function() App {
   ...
   
   _ObservableGlobal.notify('event_id', value);
   
   ...
}
```

Get value with event id
```javascript
import {_ObservableGlobal} from './App';

...

useEffect(() => {
    const observer = value => {
        console.log(value);
    }
    _ObservableGlobal.subscribe('listener_id', observer, 'event_id');
    return () => _ObservableGlobal.unsubscribe('listener_id');
},[]);

...
```

## Observable with Class instance

Notify with listener id
```javascript
import {Observable} from "./observables/observable";
export const _Observable = new Observable();

function() App {
   ...

    _Observable.notify('listener_id', value);
   
   ...
}
```

Get value with listener id
```javascript
import {_Observable} from './App';

...

useEffect(() => {
    const observer = value => {
        console.log(value);
    }
    _Observable.subscribe('listener_id', observer);
    return () => _Observable.unsubscribe('listener_id');
},[]);

...
```

`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**What is an Observer?**

An Observer is a consumer of values delivered by an Observable. Observers are simply a set of callbacks.

**@authors: <a href="https://github.com/HectorFront">Hector Rodrigues da Silva</a> and <a href="https://github.com/giovanesantossilva">Giovane Santos Silva</a>**
