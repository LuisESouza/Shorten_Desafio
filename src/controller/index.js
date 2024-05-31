import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/shorten-url', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'Por favor, forneça uma URL válida.' });
    }

    try {
        const response = await axios.post('https://cleanuri.com/api/v1/shorten', {
            url: url,
        });

        const result = response.data;

        return res.json({ url: result.result_url });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Ocorreu um erro ao encurtar a URL.' });
    }
});

app.listen(3001, () => {
    console.log("Servidor iniciado em http://localhost:3001");
});