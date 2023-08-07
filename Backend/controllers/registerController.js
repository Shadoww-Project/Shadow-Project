const bcrypt = require("bcrypt");
const { BlobServiceClient } = require("@azure/storage-blob");
const { jwtGenerator } = require("../utils/JWTgenerator");
const user = require("../model/users");
const specialist = require("../model/specialists");
const admin = require("../model/admin");

// // Initialize Azure Blob Storage client
// const blobServiceClient = BlobServiceClient.fromConnectionString(
//   process.env.AZURE_STORAGE_CONNECTION_STRING
// );
// const containerClient = blobServiceClient.getContainerClient(
//   "your-container-name"
// ); // Replace with your container name

const handleNewUser = async (req, res) => {
  let {
    parentName,
    email,
    phone,
    password,
    role,
    childName,
    birthday,
    childCondition,
    createdByAdmin,
  } = req.body;
  // Convert email to lowercase
  email = email.toLowerCase();

  // Check for duplicate emails in the db
  const duplicateEmail = await user.findOne({ email: email });
  const duplicateEmail1 = await specialist.findOne({ email: email });
  if (duplicateEmail || duplicateEmail1) {
    return res.status(409).send({ error: "Email already exists" });
  }

  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new user({
      parentName,
      email,
      phone,
      hashedPassword,
      role,
      childName,
      birthday,
      childCondition,
      // childReport,
    });

    // // Upload the file to Azure Blob Storage if available
    // if (req.file) {
    //   const blobName = req.file.originalname;
    //   const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    //   // Upload the file to Azure Blob Storage
    //   const uploadBlobResponse = await blockBlobClient.uploadStream(
    //     req.file.buffer,
    //     req.file.size
    //   );

    //   // Get the URL of the uploaded file
    //   const imageUrl = uploadBlobResponse.blobUrl;

    //   // Save the image URL in the user object
    //   newUser.childReport = imageUrl;
    // }

    // Save the user to the database
    await newUser.save();
    if (!createdByAdmin) {
      const token = jwtGenerator(newUser);
      res.status(200).json({ token });
    } else {
      res.send("New user added");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering user");
  }
};

const handleNewSpecialist = async (req, res) => {
  let {
    email,
    phone,
    password,
    role,
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

  // Check for duplicate emails in the db
  const duplicateEmail = await specialist.findOne({ email: email });
  const duplicateEmail1 = await user.findOne({ email: email });

  if (duplicateEmail || duplicateEmail1) {
    return res.status(409).send({ Emessage: "Email already exists" });
  }

  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newSpecialist = new specialist({
      email,
      phone,
      hashedPassword,
      role,
      firstName,
      lastName,
      brief,
      city,
      district,
      degree,
      specialization,
      yearsOfExperience,
      gender,
    });

    // Save the user to the database
    await newSpecialist.save();

    const token = jwtGenerator(newSpecialist);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering user");
  }
};
const createOrUpdateAdmin = async (req, res) => {
  let { fullName, email, phone, password, role } = req.body;

  email = email.toLowerCase();

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    let existingAdmin = await admin.findOne({}); // Check if any admin document exists

    if (!existingAdmin) {
      // No admin document exists, create a new one
      const newAdmin = new admin({
        fullName,
        email,
        phone,
        hashedPassword,
        role,
      });

      await newAdmin.save();
      const token = jwtGenerator(newAdmin);
      res.status(200).json({ token });
    } else {
      // Admin document exists, update the existing admin's information
      existingAdmin.fullName = fullName;
      existingAdmin.email = email;
      existingAdmin.phone = phone;
      existingAdmin.hashedPassword = hashedPassword;

      await existingAdmin.save();
      const token = jwtGenerator(existingAdmin);
      res.status(200).json({ token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating/updating admin");
  }
};
module.exports = { handleNewUser, handleNewSpecialist, createOrUpdateAdmin };
