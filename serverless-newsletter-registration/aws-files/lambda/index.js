var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();

exports.handler = function(event, context) {
	// Log the event
	console.log(JSON.stringify(event));

	// Grab event information
	var user = event.Records.Email;
	var newsletter = event.Records.Newsletter;
	
	var params = {
	    TableName: "Newsletters",
	    Item: {
	        "Email": user,
	        "Newsletter": newsletter
	    }
	};
	
	dynamo.putItem(params, function(err, data) {
        if (err) {
        	console.log(err);
        	context.fail('Failed: ' + err);
        } else {
            console.log("Successfully registered user - sending notification");
            context.succeed("OK");
            // sendNotification(user, newsletter, context);
        }
	});
}

sendNotification = function(user, newsletter, context) {
	var https = require('https');
	var url = require('url');
    var slack_url = 'https://hooks.slack.com/services/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';
    var slack_opts = url.parse(slack_url);
    slack_opts.method = 'POST';
    slack_opts.headers = {'Content-Type': 'application/json'};

    var req = https.request(slack_opts, function(res) {
        if (res.statusCode === 200) {
	        context.succeed("OK");
        } else {
	        context.fail('Failed: ' + res.statusCode);
        }
    });

    req.on('error', function(e) {
        console.log('Error with request: ' + e.message);
        context.fail(e.message);
    });

	var payload = user + " just signed up to your newsletter:\n" + newsletter;
    req.write(JSON.stringify({username: 'registration-bot', icon_emoji: ':thumbsup:', text: payload}));
    req.end();
}