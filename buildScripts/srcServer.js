import express from 'express';
import  path  from 'path';
import open  from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();
const compiler = webpack(config);
import webpackdm from 'webpack-dev-middleware';

app.use(webpackdm(compiler,{
    noInfo:true,
    publickPath : config.output.publickPath 

}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));

});
app.listen(port, function(err){
    if(err){
        console.log(err);

    } else{
        open('http://localhost:' +port);
    }
});