import generateResponse from "../services/ai.services.js";

const getResponse = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: "Code is required" })
    }
    const response = await generateResponse(code)

    res.send(response);
}

export default getResponse;