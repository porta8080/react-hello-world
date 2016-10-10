var React = require('react');
var HelloWorldButton = require('./HelloWorldButton.react');
// var HelloWorldStore = require('../stores/HelloWorld');

var HelloWorld = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Hello World!</h1>
                <HelloWorldButton />
            </div>
        );
    }
});

module.exports = HelloWorld;