const { Router } = require('express')

const router = Router();

router.get("/users", (req, res) => {
    res.send('Respondiendo al GET')
})

router.post("/users", (req, res) => {
    //res.send('Respondiendo al POST')
    const body = req.body;
    return res.status(200).json({
        status: "success",
        body
    })
})

module.exports = router;