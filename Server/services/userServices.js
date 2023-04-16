const User = require("../models/User");
const bcrypt = require("bcryptjs");
const ApiError = require("../utils/ApiError");

// exports.userById = async (user_Id) => {
//   const user = await User.findOne({ _id: user_Id });
//   return user;
// };

const getAllUsers = async () => {
  return User.find().select({ password: 0 });
};

const getUserById = async (id) => {
  return User.findById(id).select({ password: 0 });
};

const getUserByPhoneNumber = async (phone) => {
  return User.findOne({ phoneNumber: phone });
};
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  const { email, password, name, gender, altPhone, hint } = updateBody;
  const hashedPassword = await bcrypt.hash(password, 8);

  if (!user) {
    throw new ApiError("404", "User not found");
  }
  if (email) {
    const userEmail = await getUserByEmail(email);

    if (userEmail) {
      throw new ApiError(400, "User Email is Already Exists");
    }
  }

  // const DOB = new Date(updateBody.DOB);
  // console.log("dob", DOB);
  if (user?.phonenumber) {
    Object.assign(user, {
      email,
      password: hashedPassword,
      name,
      gender,
      altPhone,
      hint,
      isExistingUser: true,
    });
    await user.save();
    return user;
  }
};
const updateUser = async (phonenumber, updateBody) => {
  const { email, password, name, gender, altPhone, hint } = updateBody;
  const hashedPassword = await bcrypt.hash(password, 8);
  return User.findOneAndUpdate(
    { phonenumber },
    {
      email,
      password,
      password: hashedPassword,
      name,
      gender,
      altPhone,
      hint,
      isExistingUser: true,
    },
    { new: true }
  );
};

module.exports = {
  getUserById,
  updateUserById,
  updateUser,
  getUserByPhoneNumber,
  getUserByEmail,
  getAllUsers,
};