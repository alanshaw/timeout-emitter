# timeout-emitter
Set a timeout that emits an expire or clear event when timeout is reached or .clear() is called.

## Example

```js
var Timeout = require('timeout-emitter')

var timeout = new Timeout(5000) // Pass timeout in ms

timeout.on('expire', function () {
  // Called _once_ if the timeout is reached
})

timeout.on('clear', function () {
  // Called _once_ when timeout.clear() is called
})

// Some time in the future you may want to clear the timeout:
timeout.clear()
// Note: calling clear AFTER timeout has expired WON'T fire the 'clear' event
```
