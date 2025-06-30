import jwt from 'jsonwebtoken';
export const generateToken = (user) => {
    return jwt.sign({
        id: user_.id, role: user.role,email:user.email
    }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN })
}