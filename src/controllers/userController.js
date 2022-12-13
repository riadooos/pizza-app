import mongoose from "mongoose";
import { userSchema } from "../models/userModel";

const User = mongoose.model("User", userSchema);

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  await newUser
    .save()
    .then((user) => {
      if (!user)
        return res
          .status(500)
          .json({ success: false, message: "registration user failed!!" });
      else return res.status(200).json(user);
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  await User.find({ email, password })
    .then((user) => {
      if (user.length > 0) {
        const currentUser = {
          name: user[0].name,
          email: user[0].email,
          isAdmin: user[0].isAdmin,
          _id: user[0]._id,
        };
        res.send(currentUser);
      } else {
        return res
          .status(500)
          .json({ success: false, message: "User Login Failed!" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
};
