
import mongoose from "mongoose";

const { Schema } = mongoose;

const usersRegisterSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    role: { type: String, enum: ['admin', 'faculty', 'student'], default: 'student' }
},timestamps)

const UsersRegister = mongoose.model('UsersRegister', usersRegisterSchema);

export default UsersRegister;