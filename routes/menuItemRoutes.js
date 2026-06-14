const express = require('express');
const router = express.Router();

const MenuItem = require('../models/MenuItem') // Import the MenuItem model from models/MenuItem.js;

// POST method to get the MenuItem
router.post('/', async (req, res) => {
  try {
    const data = req.body // assuming the request body contains the menu data

    // Create a new menu document using the mongoose model
    const newMenu = new MenuItem(data);
  
    // save the new menu to the database
    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
  }
  
})

// Get method to get the MenuItem
router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

router.get('/:tasteType', async (req, res) => {
    try {
      const tasteType = req.params.tasteType; // Estract the work type from the URL parameter
      if(tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spicy') {
        const response = await MenuItem.find({taste: tasteType});
        console.log('response fetched');
        res.status(200).json(response);
      }
      else {
        res.status(404).json({error: 'Invalid taste type'});
      }
    }
    catch(err) {
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
})

router.put('/:id', async (req, res)=>{
  try{
      const menuId = req.params.id; // Extract the id of Menu Item from the URL parameter
      const updatedMenuData = req.body; // Updated data for the Menu Item

      const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenuData, {
          new: true, // Return the updated document
          runValidators: true, // Run Mongoose validation
      })

      if (!response) {
          return res.status(404).json({ error: 'Menu Item not found' });
      }

      console.log('data updated');
      res.status(200).json(response);
  }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const tasteId = req.params.id;
    const response = await MenuItem.findByIdAndDelete(tasteId);

    if(!response) {
      return res.status(404).json({error: 'MenuItem not found'});
    }

    console.log('data deleted');
    res.status(200).json({message: 'MenuItem Deleted Successfully'});

  }
  catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

module.exports = router;