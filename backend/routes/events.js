const router = require('express').Router();
const auth = require("../middleware/auth")
const e = require('express');
let Event = require('../models/event.model');

router.post("/", auth, async (req, res) => {
    const eventname = req.body.eventname;
    const location = req.body.location;
    const info = req.body.info;
    const date = Date.parse(req.body.date);

    const newEvent = new Event({
        eventname,
        location,
        info,
        date,
})
  await newEvent.save()
    .then(() => res.json('Event added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/', auth, async (req, res) =>{
  const events = await Event.find()
  .then(events =>res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Event.findById(req.params.id)
      .then(event => res.json(event))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Event.findByIdAndDelete(req.params.id)
      .then(() => res.json('Event deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').patch((req, res) => {
    Event.findById(req.params.id)
      .then(event => {

        req.body.eventname ? event.eventname = req.body.eventname : null;
        req.body.location ? event.location = req.body.location : null;
        req.body.info ? event.info = req.body.info : null;
        req.body.date ? event.date = Date.parse(req.body.date) : null;
        
        event.save()
          .then(() => res.json('Event updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router