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
     * @param id
     * @param fn
     */
    subscribe(id, fn) {
        console.log(`[~Subscribe] => ${id}`);
        this._listeners.push({id, fn});
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
     * @param id
     */
    unsubscribe(id) {
        console.log(`[~Clear] => Observer: ${id}`);
        this._listeners = this._listeners.filter(listener => listener.id !== id);
    }

    /**
     *
     * @param id
     * @param data
     */
    notify(id, data) {
        this._listeners.forEach(listener => {
            if(listener.id === id) {
                return listener.fn(data);
            }
        });
    }
}
