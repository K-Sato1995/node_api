var mongoose = require("mongoose"),
  Task = mongoose.model("Tasks");

exports.all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.create_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.load_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update_task = function(req, res) {
  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    function(err, task) {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.delete_task = function(req, res) {
  Task.remove(
    {
      _id: req.params.taskId
    },
    function(err, task) {
      if (err) res.send(err);
      res.json({ message: "Task successfully deleted" });
    }
  );
};
