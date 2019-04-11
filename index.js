let express = require('express');
let app=express();

//set public folder
app.use(express.static(__dirname+'/public'));

//view engine: Handlebars
let expressHandlebars =require('express-handlebars');
let hbs=expressHandlebars.create({
    extname: 'hbs',
    defaultLayout:'layout',
    layoutsDir: __dirname+'/views/layouts',
    partialsDir: __dirname+'/views/partials',
});
app.engine('hbs',hbs.engine);
app.set('view engine','hbs');

//define route
app.get('/',(req,res)=>{
    res.render('index');
});



//set server
app.set('port', (process.env.PORT||5000));

app.listen(app.get('port'), ()=>{
    console.log('Server is running on %s ...',app.get('port'));
})