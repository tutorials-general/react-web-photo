import aws from "aws-sdk";

import { awsConfig } from "config";

const S3_BUCKET = awsConfig.bucketName;

export const signS3 = async ({ fileName, fileType }) => {
  aws.config.update({
    region: awsConfig.region,
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
    signiture: "v4",
  });

  const s3 = new aws.S3();

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: "public-read",
  };
  return await new Promise((resolve, reject) => {
    s3.getSignedUrl("putObject", s3Params, (err, signedRequestUrl) => {
      if (err) {
        throw err;
      }
      const data = {
        signedRequestUrl,
        fileUrl: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      };
      resolve(data);
    });
  });
};
