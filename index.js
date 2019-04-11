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
app.get(['/','/home'],(req,res)=>{
    res.render('home');
});

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/consultant',(req,res)=>{
    res.render('consultant');
})

app.get('/video',(req,res)=>{
    res.render('video');
})

app.get('/question',(req,res)=>{
    res.render('question');
})

app.get('/blog',(req,res)=>{
    res.render('blog');
})

app.get('/you',(req,res)=>{
    res.render('you');
})

//set server
app.set('port', (process.env.PORT||5000));

app.listen(app.get('port'), ()=>{
    console.log('Server is running on %s ...',app.get('port'));
})