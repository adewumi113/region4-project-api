import express from 'express';
import serverless from 'serverless-http'

const app = express();

app.use(express.json());

const products = [];

let productsCount = 1;

//create new product
app.post("/add", (req, res, next) => {
  const {name} = req.body

  const newProduct = {
    id: productsCount++, //preferably should be a UUID
    name,
    description,
    createdAt: new Date(),
    updatedAt: null
  }

  products.push(newProduct); //TODO: This product should be added to the DB for persistence storage (RDS)

  return res.status(201).json({
    message: "Product created successfully",
    id: newProduct.id
  })
})

//Search
app.get("/search", (req, res, next) => {
  //Pick the queryString and use it to search the DB
})

//all products
app.get("/all", (req, res, next) => {
  return res.status(200).json({
    message: "All products returned",
    products
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);
