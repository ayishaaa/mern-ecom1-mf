const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required:true, // Reference to the User model
  },
   otp: String,
   createdAt: {
    type: Date,
    default: Date.now,
    expires: 30, // Set the expiration time for the OTP (in seconds)
  },
});
otpSchema.methods.isExpired = function () {
    // Check if the OTP has expired by comparing the current time with createdAt
    return Date.now() >= this.createdAt;
};
const otp = new mongoose.model("OTP", otpSchema);
module.exports = otp;