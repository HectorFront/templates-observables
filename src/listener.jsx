import {useEffect, useState} from 'react';
import {_ObservableCount} from './App';

export const Listener = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const observer = sum => {
            return setCount(currentCount => currentCount + sum);
        }
        _ObservableCount.subscribe('listener_id', observer);
        return () => _ObservableCount.unsubscribe('listener_id');
    },[]);

    return (
        <div>Count with Class instance: {count}</div>
    )
}