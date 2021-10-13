import { sendEmail } from '../../utils/sendEmail';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const email = req.body
        sendEmail({ email });
        return res.status(200).end();

    } else {
        return res.status(404).json({
            error: {
                code: 'not_found',
                messgae: "The requested endpoint was not found or doesn't support this method."
            }
        })
    }
}