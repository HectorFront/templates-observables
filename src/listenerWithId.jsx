import {useEffect, useState} from 'react';
import {_ObservableGlobal} from './App';

export const ListenerWithId = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const observer = sum => {
            return setCount(currentCount => currentCount + sum);
        }
        _ObservableGlobal.subscribe('listener_id', observer, 'id_event');
        return () => _ObservableGlobal.unsubscribe('listener_id');
    },[]);

    return (
        <div>Count with id of event: {count}</div>
    )
}