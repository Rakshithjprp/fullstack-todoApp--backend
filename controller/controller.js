const TodoSchema = require("../models/TodoSchema")

module.exports.getTodo = async (req, res) => {
    const todo = await TodoSchema.find()
    res.send(todo)
}

module.exports.saveTodo = (req, res) => {
    const {text} = req.body

    TodoSchema
    .create({text})
    .then((data) => {
        console.log("data added")
        console.log(data)
        res.send(data)
    })
}

module.exports.updateTodo = (req, res) => {
    const {_id, text} = req.body

    TodoSchema
    .findByIdAndUpdate(_id, {text})
  .then(() => res.send("Update is success!"))
  .catch((err) => console.log(err))
}

module.exports.deleteTodo = (req, res) => {
    const {_id} = req.body

    TodoSchema
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted"))
    .catch((err) => console.log(err))
}