// const express = require('express');
import express from "express";
const app = express();
const port = 8080;
app.get('/', (req, res) => {
    res.send('sasssdss');
    console.log(7117)
    console.log(123)
});
app.listen(port, () =>
    console.log(`Server running on port ${port}, http://localhost:${port}`)
);

