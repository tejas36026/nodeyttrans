const express = require('express');
const { YoutubeTranscript } = require('youtube-transcript');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/transcript', async (req, res) => {
    try {
        const transcript = await YoutubeTranscript.fetchTranscript('IG0J_ynkemI');
        const transcriptText = transcript.map(item => item.text).join('\n');
        res.send('<pre>' + transcriptText + '</pre>');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
