Serverless Newsletter Registration
===================

This practical use case explains how to set up a newsletter registration system
----------------------------------------

We're able to set up this system to be serverless by leveraging S3, API Gateway, AWS Lambda, and DynamoDB.

## Installation

If you're looking for the Lambda/DynamoDB instructions, refer to the README.md in /aws-files/.

There isn't much that you need to do in order to make the index.html file work. You do need to:

* Change the POST URL.
* Change the x-api-key to match your API Key and custom URL. 
I left mine in there as examples.

You may also want to change the newsletter name, though I have no doubt your newsletter is awesome :).

## Uploading the application

* Upload the index.html and /public directory
Make sure to set the permissions to allow everyone to Open/Download.

* Visit the endpoint URL that routes to your index.html
Right click the bucket -> Properties -> Static Website Hosting -> Endpoint

* As long as everything else is properly set up, you're good to go. If it doesn't, make sure you've completed all of these steps:

## Steps

1. Create a DynamoDB Table

2. Create the Lambda function (Refer to the REAMDE.md in /aws-files/)

3. Create the API and deploy it

4. Configure and upload the application

5. (Optional) Enable Slack notifications (See another use case in the Lambda Deep Dive course on LinuxAcademy.com)