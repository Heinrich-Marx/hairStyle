// const express = require('express');
import express from "express";
const app = express();
const port = process.env.PORT_BACKEND || 8080;
app.get('/', (req, res) => {
    res.send('start');
});
app.listen(port, () =>
    console.log(`Server running on port ${port}, http://localhost:${port}`)
);

