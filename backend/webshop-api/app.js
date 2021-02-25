const express = require('express');
const routes = require('./routes');
const cors = require('cors')

let app = express();
app.use(cors())

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes.client);
app.use('/api/products', routes.products);
app.use('/api/orders', routes.orders);
app.use('/api/register', routes.register);
app.use('/api/auth', routes.auth);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));