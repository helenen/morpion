const index = require('./index');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


describe('Should have a morpion grid',()=>{
    test('should have a cell', () => {
        const dom = new JSDOM(`<input type="text"/>`);
        expect(index.dom).toEqual(dom);
      });

});