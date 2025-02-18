import Event from "../db/model/Event.js";

async function handleUserRegistration(req, res) {
  try {
    await Event.create(req.body);
    // console.log(req.body);
    res.status(201).json({
      message: "User Successfully Registered..!!",
    });
  } catch (error) {
    console.error(`Error in /register ${error}`);
    if (error.code === 11000) {
      res.status(400).json({
        message: `Duplicate key error: ${
          Object.keys(error.keyValue)[0]
        } already exists.`,
      });
    } else {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}
async function handleUserRetreival(req, res) {
  try {
    const users = await Event.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(`Error in /users ${error}`);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export {
  handleUserRegistration,
  handleUserRetreival,
};
