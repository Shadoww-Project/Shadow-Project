const user = require("../model/users");

const getUser = async (req, res) => {
  const userId = req.user_id;

  const User = await user.findOne({ _id: userId }).select("-hashedPassword");

  if (!User) {
    return res.status(204).json({ message: `User not found` });
  }
  return res.json(User);
};

const updateUser = async (req, res) => {
  const userId = req.user_id;

  let {
    parentName,
    email,
    phone,
    password,
    childName,
    birthday,
    childCondition,
  } = req.body;

  email = email.toLowerCase();

  const userExists = await user.findOne({
    _id: { $ne: userId },
    email: email,
  });

  if (userExists) {
    return res.status(409).send({ Emessage: "Email already exists" });
  }

  try {
    const User = await user.findById(userId);
    if (!User) {
      return res.status(404).json({ error: "User not found" });
    }

    User.parentName = parentName;
    User.email = email;
    User.phone = phone;
    User.password = password;
    User.childName = childName;
    User.birthday = birthday;
    User.childCondition = childCondition;

    await User.save();

    res.status(200).json({ message: "User details updated successfully" });
  } catch (error) {
    console.error("Error updating user details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.user_id;
    const { isDeleted } = req.body;
    await user.findOneAndUpdate(
      { _id: userId },
      { $set: { isDeleted: isDeleted } },
      { new: true }
    );

    return res.send("You are account has been deleted");
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving user data" });
  }
};

module.exports = { getUser, updateUser, deleteUser };
