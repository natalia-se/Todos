const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, minlength: 3, maxLenth: 50 },
    isDone: { type: Boolean, default: false },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true, collation: { locale: "en_US", strength: 1 } }
);

module.exports = mongoose.model("Todo", todoSchema);
