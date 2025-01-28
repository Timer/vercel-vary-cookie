export default function handler(req, res) {
    const hasCookie = req.cookies && Object.keys(req.cookies).length > 0;

    if (hasCookie) {
        res.status(200).json({ message: `Hello with cookie: ${JSON.stringify(req.cookies)}` });
    } else {
        res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
        res.status(200).json({ message: 'Hello cached' });
    }
}