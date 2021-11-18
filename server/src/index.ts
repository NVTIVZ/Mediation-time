import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

const url = <string>process.env.MONGODB_URI;
mongoose.connect(url);

const blogSchema = new mongoose.Schema({
  content: String,
  title: String,
  short: String,
  image: String,
  date: Date,
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  content: String,
  date: Date,
});

const Blog = mongoose.model('Blog', blogSchema);
const Contact = mongoose.model('Contact', contactSchema);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/api/blogs', (req, res) => {
  Blog.find({}).then((notes) => {
    res.json(notes);
  });
});

app.get('/api/blogs/:id', (req, res) => {
  Blog.findById(req.params.id).then((notes) => {
    res.json(notes);
  });
});

app.post('/api/blogs', (req, res) => {
  const body = req.body;
  console.log(body);

  const blog = new Blog({
    title: body.title,
    content: body.content,
    short: body.short,
    image: body.image,
    date: new Date(),
  });

  blog.save().then((savedBlog: any) => {
    res.json(savedBlog);
  });
});

app.get('/api/contacts', (req, res) => {
  Contact.find({}).then((notes) => {
    res.json(notes);
  });
});

app.post('/api/contacts', (req, res) => {
  const body = req.body;
  console.log(body);

  const card = new Contact({
    name: body.name,
    content: body.content,
    email: body.email,
    date: new Date(),
  });

  card.save().then((savedNote: any) => {
    res.json(savedNote);
  });
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
