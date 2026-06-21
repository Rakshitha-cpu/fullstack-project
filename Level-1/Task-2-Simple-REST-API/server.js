const express = require("express");

const app = express();

app.use(express.json());

// Sample Data
let users = [
  {
    id: 1,
    name: "Rakshitha"
  },
  {
    id: 2,
    name: "John"
  },
  {
    id: 3,
    name: "David"
  }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to User Management REST API");
});

// READ - Get All Users
app.get("/users", (req, res) => {
  res.json(users);
});

// READ - Get User By ID
app.get("/users/:id", (req, res) => {
  const user = users.find(
    (u) => u.id === parseInt(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(user);
});

// CREATE User
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});

// UPDATE User
app.put("/users/:id", (req, res) => {
  const user = users.find(
    (u) => u.id === parseInt(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  user.name = req.body.name;

  res.json({
    message: "User updated successfully",
    user
  });
});

// DELETE User
app.delete("/users/:id", (req, res) => {
  const userExists = users.find(
    (u) => u.id === parseInt(req.params.id)
  );

  if (!userExists) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  users = users.filter(
    (u) => u.id !== parseInt(req.params.id)
  );

  res.json({
    message: "User deleted successfully"
  });
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});