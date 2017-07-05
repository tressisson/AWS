
var credentials = { accessKeyId: '', secretAccessKey: '' }
var myConfig = new AWS.Config({
    credentials: credentials, region: 'us-west-2'
});

function reqListener() {
    console.log(this.responseText);
}

var awsApi = new XMLHttpRequest();
awsApi.addEventListener("load", reqListener);
awsApi.open("GET", "https://ec2.amazonaws.com/?Action=DescribeInstances&" + credentials);
awsApi.send();
