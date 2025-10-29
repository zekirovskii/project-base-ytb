const express = require('express');
const { head } = require('.');
const router = express.Router();

router.get("/:id", (req, res, next) => {
    res.json({
        body: req.body,
        query: req.query,
        params: req.params,
        header: req.headers
   })
})

module.exports = router;