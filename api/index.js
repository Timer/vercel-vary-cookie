// api/index.js
export default function handler(req, res) {
    const hasCookie = req.headers.cookie;

    if (hasCookie) {
        res.status(200).json({ message: `Hello with cookie: ${JSON.stringify(req.headers.cookie)}` });
    } else {
        res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
        res.status(200).json({ message: 'Hello cached' });
    }
}