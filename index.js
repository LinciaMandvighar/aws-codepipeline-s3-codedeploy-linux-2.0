Q10]puthon
import json
def lambda_handler(event, context):
    student_name = "Lincia Mandvighar"
    message = f"Hello_{student_name}"
    return {
        'statusCode': 200,
        'body': message
    }

nodejs
export const handler = async (event) => {
  // TODO implement
  const name = "Lincia Mandvighar"
  const response = {
    statusCode: 200,
    body: JSON.stringify(Hello ${name}),
  };
  return response;
};



Q.9] S3 Lambda Bucket

import json
def lambda_handler(event, context):
    # Extract bucket name and object key from the event
    for record in event['Records']:
        bucket_name = record['s3']['bucket']['name']
        object_key = record['s3']['object']['key']
       
        # Log the message
        print(f"An object has been added to the bucket {bucket_name}: {object_key}")


    return {
        'statusCode': 200,
        'body': json.dumps('Log completed')
    }


Q.2] Terraform EC2 instance

provider "aws" {
access_key = "<YOUR IAM USER ACCESS KEY>"
secret_key = "<YOUR IAM USER ACCESS SECRET KEY>"
region  = "ap-south-1"
}
resource "aws_instance" "terraform_instance" {
  ami           = "<AMI KEY>"
  instance_type = "t2.micro"
}





//Q.3] Terraform S3 bucket

provider "aws" {
access_key = "<YOUR IAM USER ACCESS KEY>"
secret_key = "<YOUR IAM USER ACCESS SECRET KEY>"
region  = "ap-south-1"
}

resource "aws_s3_bucket" "my_bucket" {}


