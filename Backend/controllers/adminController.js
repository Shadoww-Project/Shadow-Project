const user = require("../model/users");
const specialist = require("../model/specialists");
const admin = require("../model/admin");

/////////// users

const getAllUsers = async (req, res) => {
  try {
    const { page } = req.query;
    const pageNumber = parseInt(page);
    const pageSize = 10;

    const totalCount = await user.countDocuments();
    const totalPages = Math.ceil(totalCount / pageSize);

    const allData = await user
      .find({ isDeleted: false })
      .select("-hashedPassword")
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);

    res.status(200).json({
      totalPages,
      users: allData,
    });
  } catch (err) {
    console.log("Error retrieving data:", err);
    res.status(500).json({ err: "An error occurred while getting data" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  let { parentName, email, phone, childName, birthday, childCondition } =
    req.body;

  email = email.toLowerCase();

  const userExists = await user.findOne({
    _id: { $ne: id },
    email: email,
  });

  if (userExists) {
    return res.status(409).send({ Emessage: "Email already exists" });
  }

  try {
    const User = await user.findById(id);
    if (!User) {
      return res.status(404).json({ error: "User not found" });
    }

    User.parentName = parentName;
    User.email = email;
    User.phone = phone;
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
    const { id } = req.params;
    const { isDeleted } = req.body;
    await user.findOneAndUpdate(
      { _id: id },
      { $set: { isDeleted: isDeleted } },
      { new: true }
    );

    return res.send("User Deleted");
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving user data" });
  }
};

const approveUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { Approved } = req.body;
    const message = Approved == true ? "approved" : "declined";
    const alreadyApproved = await user.findOne({ _id: id });

    if (alreadyApproved.Approved == Approved) {
      return res.send({ message: `User has been already ${message}` });
    }

    await user.findOneAndUpdate(
      { _id: id },
      { $set: { Approved: true } },
      { new: true }
    );

    return res.send(`User ${message}`);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving user data" });
  }
};

/////////// Specialists

const getAllSpecialists = async (req, res) => {
  try {
    const { page } = req.query;
    const pageNumber = parseInt(page) || 1;
    const pageSize = 10;

    const totalCount = await specialist.countDocuments();
    const totalPages = Math.ceil(totalCount / pageSize);

    const allData = await specialist
      .find({ isDeleted: false })
      .select("-hashedPassword")
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);

    res.status(200).json({
      totalPages,
      specialists: allData,
    });
  } catch (err) {
    console.log("Error retrieving data:", err);
    res.status(500).json({ err: "An error occurred while getting data" });
  }
};

const deleteSpecialist = async (req, res) => {
  try {
    const { id } = req.params;
    const { isDeleted } = req.body;
    await specialist.findOneAndUpdate(
      { _id: id },
      { $set: { isDeleted: isDeleted } },
      { new: true }
    );

    return res.send("Specialist Deleted");
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving user data" });
  }
};

const updateSpecialist = async (req, res) => {
  const { id } = req.params;

  let {
    email,
    phone,
    firstName,
    lastName,
    brief,
    city,
    district,
    degree,
    specialization,
    yearsOfExperience,
    gender,
  } = req.body;

  email = email.toLowerCase();

  const specialistExists = await specialist.findOne({
    _id: { $ne: id },
    email: email,
  });

  if (specialistExists) {
    return res.status(409).send({ Emessage: "Email already exists" });
  }

  try {
    const Specialist = await specialist.findById(id);
    if (!Specialist) {
      return res.status(404).json({ error: "Specialist not found" });
    }

    Specialist.email = email;
    Specialist.phone = phone;
    Specialist.firstName = firstName;
    Specialist.lastName = lastName;
    Specialist.brief = brief;
    Specialist.city = city;
    Specialist.district = district;
    Specialist.degree = degree;
    Specialist.specialization = specialization;
    Specialist.yearsOfExperience = yearsOfExperience;
    Specialist.gender = gender;

    await Specialist.save();

    res
      .status(200)
      .json({ message: "Specialist details updated successfully" });
  } catch (error) {
    console.error("Error updating Specialist details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const approveSpecialist = async (req, res) => {
  try {
    const { id } = req.params;
    const { Approved } = req.body;
    const message = Approved == true ? "approved" : "declined";
    const alreadyApproved = await specialist.findOne({ _id: id });

    if (alreadyApproved.Approved == Approved) {
      return res.send({ message: `Specialist has been already ${message}` });
    }

    await specialist.findOneAndUpdate(
      { _id: id },
      { $set: { Approved: Approved } },
      { new: true }
    );

    return res.send(`Specialist ${message}`);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving user data" });
  }
};

/////////////// admin

const getAdmin = async (req, res) => {
  const adminId = req.user_id;

  const Admin = await admin.findOne({ _id: adminId }).select("-hashedPassword");
  if (!Admin) {
    return res.status(204).json({ message: `Admin not found` });
  }
  return res.json(Admin);
};

const updateAdmin = async (req, res) => {
  const { id } = req.params;

  let { fullName, email, phone } = req.body;

  email = email.toLowerCase();

  const adminExists = await admin.findOne({
    _id: { $ne: id },
    email: email,
  });

  if (adminExists) {
    return res.status(409).send({ Emessage: "Email already exists" });
  }

  try {
    const Admin = await admin.findById(id);
    if (!Admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    Admin.fullName = fullName;
    Admin.email = email;
    Admin.phone = phone;

    await Admin.save();

    res.status(200).json({ message: "Admin details updated successfully" });
  } catch (error) {
    console.error("Error updating admin details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    await admin.deleteOne({ _id: id });

    return res.send("Admin Deleted");
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving user data" });
  }
};

///////////////

const getAllCounts = async (req, res) => {
  try {
    const userCount = await user.countDocuments();
    const specialistCount = await specialist.countDocuments();

    const collectionCounts = {
      users: userCount,
      specialists: specialistCount,
    };

    res.json(collectionCounts);
  } catch (error) {
    console.error("Failed to retrieve collection counts", error);
    res.status(500).json({ error: "Failed to retrieve collection counts" });
  }
};

module.exports = {
  getAllUsers,
  getAllSpecialists,
  getAllCounts,
  deleteUser,
  deleteSpecialist,
  updateSpecialist,
  updateUser,
  approveUser,
  approveSpecialist,
  getAdmin,
  updateAdmin,
  deleteAdmin,
};
