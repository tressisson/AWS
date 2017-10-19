Serverless Newsletter Registration
===================

## Installation

You have a few options here. Either you build everything manually as demonstrated in the lessons that go with this use-case, or you use the CloudFormation.json template.

The CloudFormation template will create the Newsletter DynamoDB table for you, as well as the Lambda function and S3 bucket that you can use to host your static website. This will make your job easier, and I highly recommend that you use CloudFormation to build environments, but you may learn more by going through the steps manually. If you use the template, be sure to scroll down to the CloudFormation Instructions section of this document or it will not work.

There isn't much that you need to do in order to make the index.html file work. You do need to:

* Change the POST URL.
* Change the x-api-key to match your API Key and custom URL. 
I left mine in there as examples.

You may also want to change the newsletter name, though I have no doubt your newsletter is awesome :).

## CloudFormation Instructions

CloudFormation templates are designed to be reusable, but there are a few unique resources that you must change for it to work.

1. Under the "LambdaFunction" resource type, you must change the "S3Bucket" and "S3Key" to match your bucket and key. You will not have access to my buckets, and buckets are unique. Create a bucket of your own and use that name for "S3Bucket". Then, upload your ZIP archive, which only needs to contain the index.js in /lambda/ for this example.

2. Change the Bucket name under the "SiteHosting" resource type. This is the bucket where you will upload your application (refer to the README.md in the parent directory for instructions on that).

## Lambda Instructions

1. This function will work as-is, but you can modify it if you'd like.
If you change the DynamoDB table when creating it, make sure you change it in this function as well.

* If you want to enable Slack notifications, make sure you uncomment the ```sendNotification(user, newsletter, context);``` line. Then, make sure you comment the ```context.succeed("OK")``` right above it. Otherwise, the function will stop executing before reaching the ```sendNotification``` function.
	* Also, make sure you change the slack_url to your custom URL.
	* Refer to the "Send Notifications To Slack On Newsletter Registration With API Gateway, Lambda, and S3" use-case under "Lambda Deep Dive" on LinuxAcademy.com if you aren't sure how to do this.

## API Gateway

Please follow along the video lesson for API Gateway instructions.