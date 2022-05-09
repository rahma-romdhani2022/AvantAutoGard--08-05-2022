const express= require('express');
const path= require('path');

const app = express();
app.use(express.static(__dirname + '/projet'));

app.get('/*' , function(req,res){
    res.sendFile(path.join(__dirname+'/projet/index.html'))
})
app.listen(process.env.PORT);