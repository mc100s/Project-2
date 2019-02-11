const express = require('express');
const router = express.Router();
const { checkConnected } = require("../config/middlewares");
/************************************
 * PROFILE PAGE
 ************************************/
// GET '/profile'
// TODO: protect the route
router.get('/', checkConnected, (req, res, next) => {
  res.render('profile/index', { user: req.user });
});

module.exports = router;
