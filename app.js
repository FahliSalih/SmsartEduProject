const express = require('express');

const app= express();



app.get("/", (req,res)=>{
    res.status(200).send('İNDEX SAYFASI');
});

const port = 5000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
