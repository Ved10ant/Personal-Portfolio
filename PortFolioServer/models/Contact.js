const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    services: {
      type: [String],
      enum: [
        "webdesign",
        "webdevelopment",
        "uiuxdesign",
        "branding",
        "ecommerce",
        "fullstackdevelopment",
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
