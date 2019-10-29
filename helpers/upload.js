const s3 = require('./s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
const crypto = require('crypto');

const upload = multer({
  limits: { fileSize: 500 * 1024 * 1024 },
  storage: multerS3({
    s3,
    bucket: 'sunguk-files',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    cacheControl: 'max-age=31536000',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, crypto.randomBytes(48).toString('hex'));
    }
  })
})

module.exports = upload;