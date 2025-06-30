import UsersRegister from "../models/usersRegister.model";

export const addingRegisterUsers = async (req, res, next) => {

    const { firstname, lastname, email, password, role } = req.body
    try {
        if (firstname && lastname && email && password && role) {

            const isUserExist = await UsersRegister.findOne({ email });
            if (isUserExist) return res.status(400).json({ message: "User already exists" });
            if (!['admin', 'faculty', 'student'].includes(role)) return res.status(400).json({ message: 'InValid role selected' })

            const hashedPassword = await bcrypt.hash(password, 10);
            const UserCreatedObj = await UsersRegister.create({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hashedPassword,
                role: role
            })
            const payloadForToGenerateToken={
                userId:UserCreatedObj?._id,
                role:UserCreatedObj?.role,
                email:UserCreatedObj?.email,
            }
            const token = generateToken(payloadForToGenerateToken)
            res.status(201).json({ token: token, message: 'User Sucessfully Created' })

        } else {
            res.status(400).json({ message: "Please fill all required fields" })
        }


    } catch (error) {
        return res.status(500).json({ message: 'Internal server Error' })
    }





}