const express = require("express");
const { products } = require("./config/data.js");

// console.log(products);

const app = express();

app.listen(5001, () => {
  console.log("run on 5001");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

/** get one product */
/** params */
app.get("/api/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;

  const myprod = products.find((item) => item.id == id);

  if (!myprod) return res.status(404).json({ msg: "product not found" });

  res.json(myprod);
});

/** query */
app.get("/api/search", (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filtered.length === 0) {
    // return res.sendStatus(404);
    return res.status(404).json({msg: 'no product match your search'})
  }
  res.json(filtered);
});

/**
 * app.get()
 * app.post()
 * app.put()
 * app.delete()
 */

// app.get("/users", (req, res) => {
//   let users = [
//     { name: "John", age: 401 },
//     { name: "Anne", age: 45 },
//     { name: "Marry", age: 21 },
//   ];
//   //   res.status(404).json(users);
//   res.sendStatus(404);
// });

// app.post("/users", (req, res) => {
//   res.send("hello form users route 1 ");
// });
