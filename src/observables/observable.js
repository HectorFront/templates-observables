/**
 * @author: Hector Rodrigues da Silva
 * @author: Giovane Santos Silva
 */

export class Observable {

    constructor() {
        this._listeners = [];
    }

    /**
     *
     * @param idListener
     * @param fnListener
     */
    subscribe(idListener, fnListener) {
        console.log(`[~Subscribe] => ${id}`);
        this._listeners.push({idListener, fnListener});
    }

    /**
     *
     * @returns {*[]}
     */
    unsubscribeAll() {
        console.log('[~Clear] => All observers');
        this._listeners = [];
    }

    /**
     *
     *
     * @param idListener
     */
    unsubscribe(idListener) {
        console.log(`[~Clear] => Observer: ${idListener}`);
        this._listeners = this._listeners.filter(listener => listener.id !== idListener);
    }

    /**
     *
     * @param idEvent
     * @param data
     */
    notify(idEvent, data) {
        this._listeners.forEach(listener => {
            if(listener.id === idEvent) {
                return listener.fn(data);
            }
        });
    }
}
