const specialist = require("../model/specialists");
const getSpecialist = async (req, res) => {
  const specialistId = req.user_id;

  const Specialist = await specialist
    .findOne({ _id: specialistId })
    .select("-hashedPassword");

  if (!Specialist) {
    return res.status(204).json({ message: `Specialist   not found` });
  }
  return res.json(Specialist);
};

const updateSpecialist = async (req, res) => {
  const specialistId = req.user_id;

  let {
    email,
    phone,
    password,
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
    _id: { $ne: specialistId },
    email: email,
  });

  if (specialistExists) {
    return res.status(409).send({ Emessage: "Email already exists" });
  }

  try {
    const Specialist = await specialist.findById(specialistId);
    if (!Specialist) {
      return res.status(404).json({ error: "Specialist not found" });
    }

    Specialist.email = email;
    Specialist.phone = phone;
    Specialist.password = password;
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

    res.status(200).json({ message: "Your details updated successfully" });
  } catch (error) {
    console.error("Error updating Specialist details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteSpecialist = async (req, res) => {
  try {
    const specialistId = req.user_id;
    const { isDeleted } = req.body;
    await specialist.findOneAndUpdate(
      { _id: specialistId },
      { $set: { isDeleted: isDeleted } },
      { new: true }
    );

    return res.send("Your account has been deleted successfully");
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving user data" });
  }
};

module.exports = { getSpecialist, updateSpecialist, deleteSpecialist };
