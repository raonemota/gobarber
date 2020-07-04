import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hello GoStack!'})
});

app.listen(3334, () => {
    console.log('📦 Server started on port 3334');
});
