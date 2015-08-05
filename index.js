var inherits = require('util').inherits
var EventEmitter = require('events').EventEmitter

function Timeout (delay) {
  this._timeoutObject = setTimeout(this._onExpire.bind(this), delay)
  this.expired = false
  this.cleared = false
}
inherits(Timeout, EventEmitter)

Timeout.prototype._onExpire = function () {
  this.expired = true
  this.emit('expire', this)
}

Timeout.prototype.clear = function () {
  if (this.expired || this.cleared) return
  clearTimeout(this._timeoutObject)
  this.cleared = true
  this.emit('clear', this)
}

module.exports = Timeout
