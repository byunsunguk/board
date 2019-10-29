const aws = require('aws-sdk');

const s3 = new aws.S3({
  accessKeyId: 'AJ7LXPAH7MGCTJXGVHUS',
  secretAccessKey: 'ZeGzoShravR6geDV9PePrCh1AuoefR2dF7f5ab3Q/DQ',
  region: 'sgp1',
  endpoint: 'sgp1.digitaloceanspaces.com',
})

module.exports = s3;