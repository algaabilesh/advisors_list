const express = require('express');
const faker = require('faker');
const cors = require('cors');

const generateAdvisors = (numAdvisors, offset = 0) => {
  return Array.from({ length: numAdvisors }, (_, index) => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    languages: faker.random.arrayElements(['English', 'Spanish', 'French', 'German'], 2),
    reviewsNumber: faker.datatype.number(1000),  
    isOnline: faker.datatype.boolean(),
    city: faker.address.city(),
    offset: offset + index,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${faker.name.firstName()}`,
  }));
};

const app = express();
const port = 4000;

app.use(cors());

app.get('/api/advisors', (req, res) => {
  const offset = Number(req.query.offset) || 0; 
  const advisors = generateAdvisors(50, offset);
  
  res.json(advisors);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});