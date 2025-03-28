import JWT from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
        const {token} = req.headers;

       
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }
      
        const token_decoded = JWT.verify(token, process.env.JWT_SECRET);


        if (token_decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ success: false, message: "Forbidden: Invalid admin credentials" });
        }
        next();
       
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

export default adminAuth