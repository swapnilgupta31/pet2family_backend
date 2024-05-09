const connectToMongo = require('./database.js');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const PetGroom = require('./models/petGroom'); // Import the PetGroom model
const PetHouse = require('./models/petHouse'); // Import the PetHouse model
const Blog = require('./models/blog');
const AddPet = require('./models/addPet');

connectToMongo();

const app = express();
const port = 5501;

app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//authentication
app.use('/api/customerauth', require('./routes/customerauth'));
app.use(express.static(path.join(__dirname, 'Frontend')));

// Use separate routes for different HTML files
app.get('/', (req, res) => {
  console.log('Request received for index.html');
  return res.sendFile(path.join(__dirname, 'Frontend', 'index.html'));
});

app.get('/signup', (req, res) => {
  console.log('Request received for signup.html');
  return res.sendFile(path.join(__dirname, 'Frontend', 'signup.html'));
});


// Route to handle form submissions for pet grooming data
app.post('/submit-grooming-data', async (req, res) => {
  try {
    // Create a new instance of the PetGroom model with data from the request body
    const newGroomingData = new PetGroom(req.body);
    
    // Save the data to the database
    await newGroomingData.save();
    
    // Respond with success status
    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Error saving grooming data:', error);
    // Respond with error status
    res.status(500).send({ success: false, error: 'Internal server error' });
  }
});


// Route to handle form submissions for adding pet data
app.post('/submit-pet-data', async (req, res) => {
  try {
    // Create a new instance of the AddPet model with data from the request body
    const newPetData = new AddPet(req.body);
    
    // Save the data to the database
    await newPetData.save();
    
    // Respond with success status
    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Error saving pet data:', error);
    // Respond with error status
    res.status(500).send({ success: false, error: 'Internal server error' });
  }
});



// Route to handle form submissions for pet house data
app.post('/submit-house-data', async (req, res) => {
  try {
    // Create a new instance of the PetHouse model with data from the request body
    const newHouseData = new PetHouse(req.body);
    
    // Save the data to the database
    await newHouseData.save();
    
    // Respond with success status
    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Error saving house data:', error);
    // Respond with error status
    res.status(500).send({ success: false, error: 'Internal server error' });
  }
});

// Route to handle form submissions for blog data
app.post('/submit-blog-data', async (req, res) => {
  try {
    // Create a new instance of the BlogPost model with data from the request body
    const newBlogPost = new Blog(req.body);
    
    // Save the data to the database
    await newBlogPost.save();
    
    // Respond with success status
    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Error saving blog data:', error);
    // Respond with error status
    res.status(500).send({ success: false, error: 'Internal server error' });
  }
});

// Route to fetch all blog posts
app.get('/fetch-blog-posts', async (req, res) => {
  try {
    // Fetch all blog posts from the database
    const allPosts = await Blog.find().sort({ createdAt: -1 }); // Fetch all posts without limit
    
    // Respond with the fetched posts
    res.status(200).json(allPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Respond with error status
    res.status(500).send({ error: 'Internal server error' });
  }
});



// Route to fetch all pet data
app.get('/fetch-pet-data', async (req, res) => {
  try {
    // Fetch all pets from the database
    const allPets = await AddPet.find().sort({ createdAt: -1 }); // Fetch all pets without limit
    
    // Respond with the fetched pets
    res.status(200).json(allPets);
  } catch (error) {
    console.error('Error fetching pet data:', error);
    // Respond with error status
    res.status(500).send({ error: 'Internal server error' });
  }
});



// Catch-all route for 404
app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, '127.0.0.1', () => {
  console.log(`pet2family backend listening on http://127.0.0.1:${port}`);
});