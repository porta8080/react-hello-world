var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../dispatcher/Dispatcher.js');

var _counter = 0;

function count(){
    _counter++;
    console.log(_counter)
}

var HelloWorldStore = assign({},EventEmitter.prototype,{
    getCounter:function(){
        return _counter;
    },
    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

Dispatcher.register(function(action){
    switch (action) {
        case 'count':
            count();
            HelloWorldStore.emitChange();
            break;
    
        default:
            break;
    }
});

module.exports = HelloWorldStore;