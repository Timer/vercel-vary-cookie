// api/ua.js
export default function handler(req, res) {
    const userAgent = req.headers['user-agent'];
    res.setHeader('Vary', 'User-Agent');
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
    res.status(200).json({ message: `Hello ${userAgent}` });
}