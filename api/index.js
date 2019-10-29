const { Router } = require('express');
const router = Router();

router.use(require('./upload'));

module.exports = router;