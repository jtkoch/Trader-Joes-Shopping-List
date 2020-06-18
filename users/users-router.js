const router = require("express").Router()
const Users = require("./users-model")
const bcrypt = require("bcryptjs")

// Get users
router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to get users",
      })
    })
})

// Get user By Id
router.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      if(!user) {
        res.status(401).json({
          message: `User of ID ${req.params.id} does not exist`
        })
      } else {
        res.status(200).json(user)
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to get user with that ID",
      })
    })
})

// Update user
router.put("/:id", (req, res) => {
  const {id} = req.params
  const updatedUser = req.body
  Users.findById(id)
    .then(user => {
      console.log("Found User:", user)
      console.log("Updated User:", updatedUser)

      if(user && bcrypt.compareSync(updatedUser.password, user.password)) {
        console.log("user password not changed")
        Users.update(updatedUser, id)
          .then(updated => {
            res.status(201).json({
              success: "updated", id: user.id, updated: updatedUser,
            })
          })
      } else if (user && (!bcrypt.compareSync(updatedUser.password, user.password))) {
        console.log("user password was changed")
        const hash = bcrypt.hashSync(updatedUser.password, 8) // hashes the updated password
        updatedUser.password = hash // sets the updated user password value to a hashed password
        Users.update(updatedUser, id).then(updated => {
          res.status(201).json({
            success: "updated", id: user.id, updated: updatedUser,
          })
        })
      } else {
        res.status(401).json({
          message: `Could not find user with id ${id}`,
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Failed to update User",
      })
    })
})

// Delete user
router.delete("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      if(user) {
        Users.remove(req.params.id)
          .then(removed => {
            res.status(200).json({
              success: "deleted", id: user.id,
            })
          })
          .catch(err => {
            res.status(500).json({
              message: `Failed to delete user with id ${req.params.id}`,
            })
          })
      } else {
        res.status(401).json({
          message: `Could not find user with id ${req.params.id}`,
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to delete user",
      })
    })
})

// save an item
router.post("/:id/saved", async(req, res, next) => {
  const id = req.params.id;

  const item = req.body;

  const user = await model.findById(id);
  if (!user) {
    return res.status(404).json({
      message: "The seeker with that ID doesn't exist.",
    });
  } else if (!item.item_id || !item.name || !item.price || !item.category) {
    return res.status(400).json({
      message: "You must include the item_id, name, price, and category in your request."
    });
  };

  try {
    res.status(201).json(await model.save(id, item))
  } catch (err) {
    console.log(err)
    next(err)
  };
});

// get all saved items for a user
router.get("/:id/saved", async(req, res, next) => {
  const id = req.params.id;

  const user = await model.findById(id);
  if (!user) {
    return res.status(404).json({
      message: "The seeker with that ID doesn't exist.",
    });
  }

  try {
    res.status(200).json(await model.findSaved(id))
  } catch (err) {
    console.log(err)
    next(err)
  };
});

// delete a item from saved
router.delete("/:id/saved/:item_id", async (req, res, next) => {
  const id = req.params.id;
  const item_id = req.params.item_id;

  try {
    const user = await model.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "The seeker with that ID doesn't exist.",
      });
    } else {
      const deleted = await model.removeSaved(id, item_id)
      if (deleted.numberOfDeletedRecords === 0) {
        return res.status(404).json({ message: "Saved item not found." })
      }
      res.status(200).json(deleted)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router