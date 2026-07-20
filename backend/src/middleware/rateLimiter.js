import rateLimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
    try {
        const ip = req.headers["x-forwarded-for"] || req.ip || "127.0.0.1";
        const { success } = await rateLimit.limit(ip)
        
        if (!success) {
            return res.status(429).json({ message: "Too many requests try again later" })
        }
        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
}

export default rateLimiter;