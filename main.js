#!/usr/bin/env node

var test = require('./lib/test')
,   watch = require('watch')
,   cwd = process.cwd()

console.log('Current working directory: ' + cwd + '...')

// 
/*
 * First, check if the test/ folder exists.
 * This is a requirement to perform tests.
 */
if (test.folderExists()) {

    console.log('Ok, test/ folder exists...')

    test.run()

    watch.watchTree('./', { ignoreDotFiles: true }, function(file, curr, prev){
        if(typeof file == 'object' && prev === null && curr === null) {
            // Finished walking the tree.
        } else { //
            // File changed, new file or file removed.
            if(file.charAt(0) != '.') {
                console.log('File ' + file + ' changed...')
                test.run()
            }
        }
        //
    })

} else {
    console.log('test/ folder does\'t exist. Please create it in order to perform tests.')
}
