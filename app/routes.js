const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

//Routes Prototype V2

router.post('/front_door/prototype_v2/where_to-answer', function(req, res) {
    
    let where_from = req.session.data['country-from']

    if (where_from==="Great Britain") {
        res.redirect('/front_door/prototype_v2/where_to-international')
    }
    else{
        res.redirect('/front_door/prototype_v2/where_to-uk')
    }
    
});