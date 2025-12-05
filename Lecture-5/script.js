const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use(function(req,res,next){
    console.log("middleware run");
    next();
})