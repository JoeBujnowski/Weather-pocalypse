const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('page is rendering');
});

module.exports = router;
