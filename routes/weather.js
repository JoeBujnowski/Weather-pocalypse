const router = require('express').Router();

router.get('/home', (req, res) => {
  res.render('page is rendering');
});

module.exports = router;
