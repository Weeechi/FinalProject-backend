const express = require('express')
const router = express.Router();
const Lift = require('../models/lifts.js');

router.post('/', (req, res)=>{
    Lift.create(req.body, (err, createdLift)=>{
        res.json(createdLift);
    })
})

router.get('/', (req, res)=>{
    Lift.find({}, (err, foundLift)=>{
        res.json(foundLift);
    })
})

router.delete('/:id', (req, res)=>{
    Lift.findByIdAndRemove(req.params.id, (err, deletedLift)=>{
        res.json(deletedLift)
    })
})

router.put('/:id', (req, res)=>{
    Lift.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLift)=>{
        res.json(updatedLift);
    })
})

// router.get('/', (req, res)=>{
//     res.send('index')
// });


module.exports = router;