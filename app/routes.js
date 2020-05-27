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
    
    let commodity = req.session.data['commodity-name']

    if (commodity==="Orchids") {
        res.redirect('https://www.gov.uk/guidance/importing-plants-fruit-vegetables-or-plant-material-to-the-uk')
    }
    else if (commodity==="Salmon") {
        res.redirect('https://www.gov.uk/guidance/exporting-and-importing-fish-if-theres-no-brexit-deal')
    }
    else if (commodity==="Horses") {
        res.redirect('https://www.gov.uk/guidance/export-horses-and-ponies-special-rules')
    }
    else{
        res.redirect('https://www.gov.uk/guidance/export-live-animals-special-rules')
    }
    
});

router.post('/front_door_routing/prototype_v1/where_to-answer', function(req, res) {
    
    let where_from = req.session.data['country-from']

    if (where_from==="Great Britain") {
        res.redirect('/front_door_routing/prototype_v1/where_to-international')
    }
    else{
        res.redirect('/front_door_routing/prototype_v1/where_to-uk')
    }
    
});

//Routes Routing Prototype V2

router.post('/front_door_routing/prototype_v2/which_govuk_page', function(req, res) {
    
    let commodity = req.session.data['commodity-name']

    if (commodity==="Orchids") {
        res.redirect('/front_door_routing/prototype_v2/what_to_do-orchids')
    }
    else if (commodity==="Salmon") {
        res.redirect('https://www.gov.uk/guidance/exporting-and-importing-fish-if-theres-no-brexit-deal')
    }
    else if (commodity==="Horses") {
        res.redirect('https://www.gov.uk/guidance/export-horses-and-ponies-special-rules')
    }
    else{
        res.redirect('https://www.gov.uk/guidance/export-live-animals-special-rules')
    }
    
});

router.post('/front_door_routing/prototype_v2/where_to-answer', function(req, res) {
    
    let where_from = req.session.data['country-from']

    if (where_from==="Great Britain") {
        res.redirect('/front_door_routing/prototype_v2/where_to-international')
    }
    else{
        res.redirect('/front_door_routing/prototype_v2/where_to-uk')
    }
    
});

//Routes Routing Prototype V3

router.post('/front_door_routing/prototype_v3/which_govuk_page', function(req, res) {
    
    let commodity = req.session.data['commodity-name']

    if (commodity==="Orchids") {
        res.redirect('/front_door_routing/prototype_v3/orchids/what_to_do-orchids')
    }
    else if (commodity==="Salmon") {
        res.redirect('https://www.gov.uk/guidance/exporting-and-importing-fish-if-theres-no-brexit-deal')
    }
    else if (commodity==="Horses") {
        res.redirect('https://www.gov.uk/guidance/export-horses-and-ponies-special-rules')
    }
    else{
        res.redirect('https://www.gov.uk/guidance/export-live-animals-special-rules')
    }
    
});

router.post('/front_door_routing/prototype_v3/where_to-answer', function(req, res) {
    
    let where_from = req.session.data['country-from']

    if (where_from==="Great Britain") {
        res.redirect('/front_door_routing/prototype_v3/where_to-international')
    }
    else{
        res.redirect('/front_door_routing/prototype_v3/where_to-uk')
    }
    
});

//Routes Routing Prototype V4

//Show relevent "results" page depending on what commodity is entered

router.post('/front_door_routing/prototype_v4/what_commodity', function(req, res) {
    
    let commodity = req.session.data['commodity-name']

    if (commodity==="Orchids") {
        res.redirect('/front_door_routing/prototype_v4/commodity-orchid-results')
    }
    else if (commodity==="Horses") {
        res.redirect('/front_door_routing/prototype_v4/commodity-horses-results')
    }
    else{
        res.redirect('/front_door_routing/prototype_v4/where_from')
    }
    
});

//Show relevent "where to" page depending on where it's coming from

router.post('/front_door_routing/prototype_v4/where_to-answer', function(req, res) {
    
    let where_from = req.session.data['country-from']

    if (where_from==="Great Britain" || where_from==="United Kingdom") {
        res.redirect('/front_door_routing/prototype_v4/where_to-international')
    }
    else{
        res.redirect('/front_door_routing/prototype_v4/where_to-uk')
    }
    
});

//Send to end point from "Do you pass through anywhere" page

router.post('/front_door_routing/prototype_v4/which_govuk_page', function(req, res) {
    
    let commodity = req.session.data['commodity-name']

    if (commodity==="Orchids") {
        res.redirect('/front_door_routing/prototype_v4/orchids/what_to_do-orchids')
    }
    else if (commodity==="Salmon") {
        res.redirect('https://www.gov.uk/guidance/exporting-and-importing-fish-if-theres-no-brexit-deal')
    }
    else if (commodity==="Horses") {
        res.redirect('/front_door_routing/prototype_v4/horses/horses-steps')
    }
    else{
        res.redirect('https://www.gov.uk/guidance/export-live-animals-special-rules')
    }
    
});