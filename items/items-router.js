const router = require("express").Router()
const Items = require("./items-model")

// Get items
router.get("/", (req, res) => {
  Items.find()
    .then(items => {
      res.status(200).json(items)
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to get items",
      })
    })
})

// Get item By Id
router.get("/:id", (req, res) => {
  Items.findById(req.params.id)
    .then(item => {
      if(!item) {
        res.status(401).json({
          message: `Item of ID ${req.params.id} does not exist`
        })
      } else {
        res.status(200).json(item)
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to get item with that ID",
      })
    })
})

// Update item
router.put("/:id", (req, res) => {
  const {id} = req.params
  const updatedItem = req.body
  Items.findById(id)
    .then(item => {
      console.log("Found item:", item)
      console.log("Updated item:", updatedItem)

      if(item) {
        Items.update(updatedItem, id)
          .then(updated => {
            res.status(201).json({
              success: "updated", id: item.id, updated: updatedItem,
            })
          })
      } else {
        res.status(401).json({
          message: `Could not find item with id ${id}`,
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

// Delete item
router.delete("/:id", (req, res) => {
  Items.findById(req.params.id)
    .then(item => {
      if(item) {
        Items.remove(req.params.id)
          .then(removed => {
            res.status(200).json({
              success: "deleted", id: item.id,
            })
          })
          .catch(err => {
            res.status(500).json({
              message: `Failed to delete item with id ${req.params.id}`,
            })
          })
      } else {
        res.status(401).json({
          message: `Could not find item with id ${req.params.id}`,
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to delete item",
      })
    })
})

module.exports = router