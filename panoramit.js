var panoramit = require('panoramit');
 
panoramit.generate({
  inputPaths: [path.join(__dirname, 'input', '*.jpg')],
  outputFile: path.join(__dirname, 'out', 'out.jpg'),
  tempDir: path.join(__dirname, 'tmp'),
 
  debug: false // optional value in case you want to debug the individual panorama commands 
}, function (err, outputPath) {
  // output path is passed through for convenience on success 
});
