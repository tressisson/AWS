#!/bin/bash
yum install httpd php php-mysql -y
yum update -y
chkconfig httpd on
service httpd start
echo "<?php phpinfo();?>" > /var/www/html/index.php
wget https://s3-eu-west-1.amazonaws.com/acloudguru/connect.php