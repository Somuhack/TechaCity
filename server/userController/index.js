// const express = require("express");
// const router = express.Router();
// const User = require("./model/userModel");

// router.post("/", async (req, res) => {
//   try {
//     const { firstname, lastname, email, message } = req.body;

//     if (!firstname || !lastname || !email || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const newUser = new User({ firstname, lastname, email, message });
//     await newUser.save();

//     res.status(201).json({ message: "Contact saved successfully" });
//   } catch (err) {
//     console.error("Error saving contact:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;

// its my finall code-----------

const express = require("express");
const router = express.Router();
const User = require("../model/userModel");

router.post("/", async (req, res) => {
  try {
    // const { firstname, lastname, email, message } = req.body;

    // if (!firstname || !lastname || !email || !message) {
    //   return res.status(400).json({ error: "All fields are required" });
    // }

    // const newUser = new User({ firstname, lastname, email, message });
    // await newUser.save();
    await User.create(req.body)
      .then((use) => res.json(use))
      .catch((err) => req.json(err));

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
