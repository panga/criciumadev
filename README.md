CriciumaDev Demo
================

* Install and configure AWS CLI locally

* Change 'publish' script variables (AWS_ACCOUNT, AWS_REGION, AWS_ECR_REPOSITORY)

* Build demo Node app Docker image 
`$ ./build`

* Run Docker image on port 8080 
`$ ./start`

* Publish Docker image to Amazon ECR
`$ ./publish`

* Go to ECS cluster panel on AWS Console and create task/services with published image