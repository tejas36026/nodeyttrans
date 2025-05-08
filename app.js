import { YoutubeTranscript } from 'youtube-transcript';


// In aiimageeditro/server.js
app.get('/api/transcript', async (req, res) => {
    const transcript = await YoutubeTranscript.fetchTranscript('IG0J_ynkemI');
    res.json(transcript);
});
