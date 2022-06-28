const express = require("express");
const path = require("path");

const routes = require("./routes");
const connection = require("./config/connection");
const { User, Book } = require("./models");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
// app.use(routes);

app.get("/users/:id", async (req, res) => {
  // get all users from DB with Books
  const users = await User.findByPk(req.params.id, {
    include: [Book],
  });

  return res.json({ data: users });
});

app.get("/books", async (req, res) => {
  // get all users from DB with Books
  const books = await Book.findAll({
    include: [User],
  });

  return res.json({ data: books });
});

const init = async () => {
  try {
    // connect to DB
    await connection.sync({ force: false });

    // server listen on PORT
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to start server | ${error.message}`);
  }
};

init();
