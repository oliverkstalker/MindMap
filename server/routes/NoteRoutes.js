const express = require('express');
const router = express.Router();
const Note = require('../models/Note.js');

// Get all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.json({ error: "Error fetching notes" });
    }
});

// Create a new note
router.post('/', async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.status(201).json(note);
    }
    catch (error) {
        res.json({ error: "Error creating note" });
    }
});


module.exports = router;

