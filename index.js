let express = require('express');
let app=express();

//set public folder
app.use(express.static(__dirname+'/public'));

//define route

//set server
app.set('port', (process.env.PORT||5000));

app.listen(app.get('port'), ()=>{
    console.log('Server is running on %s ...',app.get('port'));
})