import jwt from 'jsonwebtoken'

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })

    res.cookie("jwt", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, //7 days
        httpOnly: true,     // prevent xss ,cant access via js
        sameSite: "strict",    //prevent csrf attack 
        secure: process.env.NODE_ENV !== 'development'
    })

    return token;
}