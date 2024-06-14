/**
 * Problem 11: Implementing a Simple Pub/Sub System
 *
 * Implement a simple Pub/Sub system with methods `subscribe`, `unsubscribe`, and `publish`.
 *
 * - `subscribe(event, callback)` - Adds the callback to the list of event listeners.
 * - `unsubscribe(event, callback)` - Removes the callback from the list of event listeners.
 * - `publish(event, data)` - Calls all the callbacks for the event with the given data.
 */
function createPubSub() {
    const events = {};

    function subscribe(event, callback) {
        // Implement here
    }

    function unsubscribe(event, callback) {
        // Implement here
    }

    function publish(event, data) {
        // Implement here
    }

    return {
        subscribe,
        unsubscribe,
        publish
    };
}
