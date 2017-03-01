var request = require('request');
var async = require('async');

exports.handler = function(req, res) {
  async.parallel(
    function(event,context,callback) {
      var url = "http://external1.com/api/some_endpoint";
      request(url, function(err, response, body) {
        // JSON body
       
      });
    }
    );
};
