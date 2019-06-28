import { expect } from 'chai';
let jsdom = require('jsdom').JSDOM;
describe('Our first test',() =>{
    it('should pass',() =>{
        expect(true).to.equal(true);
    });
});


describe('index.html',()=>{
    it('should say hello',(done) =>{
       
        jsdom.fromFile('src/index.html').then(function (dom) {
            let h1 = dom.window.document.querySelectorAll('h1')[0].textContent;
         expect(h1).to.equal("Hello World!");
              // done();
         
        }).then(done, done);
        
       // window.close();
    })
    
})