var Robinhood = require('robinhood');
var rh = Robinhood({username:'', password:''}, function(){

    rh.quote_data('GOOG', function(error, response, body) {
    if (error) {
        console.error(error);
        process.exit(1);
    }

    console.log(body);
});

});
