/**
 * @author Hector Rodrigues da Silva
 */

export let _observers = [];

export class ObservableGlobal {

    /**
     *
     * @returns {*[]}
     */
    static unsubscribeAll() {
        console.log('[~Clear] => All observable');
        return _observers = [];
    }

    /**
     *
     * @param idListener
     * @returns {*[]}
     */
    static unsubscribe(idListener) {
        console.log(`[~Clear] => Observer: ${idListener}`);
        return _observers = _observers.filter(item => item.observer.idListener !== idListener);
    }

    /**
     *
     * @param idEvent
     * @param data
     */
    static notify(idEvent, data) {
        _observers.forEach(({observer}) => {
            if(observer.idEvent === idEvent) {
                observer.fnListener(data);
            }
        });
    }

    /**
     *
     * @param idListener
     * @param fnListener
     * @param idEvent
     * @returns {*[]}
     */
    static subscribe(idListener, fnListener, idEvent) {
        console.log(`[~Subscribe] => ID: ${idEvent} = ${idListener}`);
        _observers.push({observer: {idListener, fnListener, idEvent}});
    }
}

