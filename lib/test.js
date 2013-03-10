/**
 * Run mocha tests.
 */

var Mocha = require('mocha')
,   fs = require('fs')
,   mocha = new Mocha

module.exports = {

    /*
     * Check existance of test files (located in ./test folder.
     */
    folderExists: function(){
            try {
                stats = fs.statSync('./test') 
                return stats.isDirectory()
            } catch (e) {
                return false
            }
        },

    /*
     * Run the tests.
     */
    run: function(){

             /*
              * Setup mocha.
              */
             mocha.reporter('spec').ui('bdd')

             this.list().forEach(function(file){
                 mocha.addFile('./test/' + file)
             })

             /*
              * Running mocha.
              */
             console.log('Running mocha...')
             var runner = mocha.run(function(){
                 console.log('Mocha was run successfully. Listening for changes...')
             })
         },

    /*
     * List test files.
     */
    list: function(){
              return fs.readdirSync('./test')
          }
}
