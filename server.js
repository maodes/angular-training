'use strict';

var express = require( 'express' );
var app     = express();
var morgan  = require( 'morgan' );

app.use( express.static( 'app' ) );
app.use( morgan( 'dev' ) );
app.use( '/bower_components', express.static( 'bower_components' ) );



app.listen( 8005 );

console.log( 'Listening to port 8005' );
