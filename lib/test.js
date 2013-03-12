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
                 // Add test files to mocha
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
              var files = []
              fs.readdirSync('./test').forEach(function(file){
                  // Iterate throw files to remove temporary files
                  if (file.charAt(0) != '.') files.push(file)
              })
              return files
          }
}
