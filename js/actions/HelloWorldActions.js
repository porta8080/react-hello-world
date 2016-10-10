var Dispatcher = require('../dispatcher/Dispatcher');

module.exports = {
    count: function(){
        Dispatcher.dispatch({
            actionType: 'count'
        });
    }
}