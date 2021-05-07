const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');


//GET all members (Simple REST API)
router.get('/api/members', ( req, res) => res.json(members));


//GET Single Member
router.get('/api/members/:id', (req, res) => {
    const found = members.some( member => member.id === parseInt(req.params.id));

    if(found){
        res.json(members.filter( member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg: `No members with ID = ${req.params.id}`});
    }
});


//Create a member : POST Request
router.post('/api/members', (req, res) => {
    //res.send(req.body);
    const newMember = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email,
        status : req.body.status ? req.body.status : 'active'
    }

    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg : 'Please include all details'});
    }

    members.push(newMember);
    res.json(members);
});


//Update a member : PUT Request
router.put('/api/members/:id', (req, res) => {
    const found = members.some( member => member.id === parseInt(req.params.id));

    if(found){
        const updMember = req.body;
        members.forEach(i => {
            if(i.id === parseInt(req.params.id)){
                i.name = updMember.name ? updMember.name : i.name;
                i.email = updMember.email ? updMember.email : i.email;
                i.status = updMember.status ? updMember.status : i.status;

                res.json({msg: 'Member is Updated', i});
            }
        });
    }else{
        res.status(400).json({msg: `No members with ID = ${req.params.id}`});
    }
});


//Delete a member : DELETE Request
router.delete('/api/members/:id', (req, res) => {
    const found = members.some( member => member.id === parseInt(req.params.id));

    if(found){
        //res.json(members.filter( member => member.id !== parseInt(req.params.id)));
        members.splice( parseInt(req.params.id)-1, 1 ); // req.params.id - 1 for index
        res.send(members);
    }else{
        res.status(400).json({msg: `No members with ID = ${req.params.id}`});
    }
});



module.exports = router;