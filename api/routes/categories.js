var express = require('express');
var router = express.Router();

const isAuthenticated = true;
router.all("*",(req,res,next) => {
    if (isAuthenticated) {
        next();
    } else {
        res.json({success: false, message: "not authenticated"});
     }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({success: true, message: "Categories route"});
});

module.exports = router;
