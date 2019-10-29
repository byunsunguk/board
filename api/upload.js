const { Router } = require('express');
const router = Router();
const upload = require('../helpers/upload')

router.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  res.json({
    name: file.originalname,
    mimeType: file.mimetype,
    location: file.location,
  });
});

module.exports = router;