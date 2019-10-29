const aws = require('aws-sdk');

const s3 = new aws.S3({
  accessKeyId: 'WN3ZPJ4A2BDYQO7NCHFM',
  secretAccessKey: 'y72Wtt0uq+6SMmJKlkDdhFklzbxh3cITFFZ52Y6SfDY',
  region: 'sgp1',
  endpoint: 'sgp1.digitaloceanspaces.com',
})

module.exports = s3;