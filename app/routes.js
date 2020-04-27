const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

//Routes Dashboard Prototype V2

router.post('/front_door_dashboard/prototype_v2/where_to-answer', function(req, res) {
    
    let where_from = req.session.data['country-from']

    if (where_from==="Great Britain") {
        res.redirect('/front_door_dashboard/prototype_v2/where_to-international')
    }
    else{
        res.redirect('/front_door_dashboard/prototype_v2/where_to-uk')
    }
    
});

//Routes Routing Prototype V1

router.post('/front_door_routing/prototype_v1/which_govuk_page', function(req, res) {
    
    var commodity = req.session.data['commodity-name']

    if (commodity="Molluscs") {
        res.redirect('https://www.gov.uk/guidance/export-live-fish-and-shellfish-for-aquaculture-and-ornamental')
    }
    else if (commodity="Horses") {
        res.redirect('https://www.gov.uk/guidance/export-horses-and-ponies-special-rules')
    }
    else{
        res.redirect('https://www.gov.uk/guidance/export-live-animals-special-rules')
    }
    
});