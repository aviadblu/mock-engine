const path = require('path');
const fs = require('fs');
const tplFolder = path.join(__dirname, '../src/assets/templates');
let metaData = [];
fs.readdir(tplFolder, (err, files) => {
  files.forEach(file => {
    if(file.endsWith('.html')) {
      metaData.push({
        title: file.replace('.html', ''),
        path: '/assets/templates/' + file
      });
    }
  });
  createFile();
});

function createFile() {
  fs.writeFile(tplFolder + '/metadata.json', JSON.stringify(metaData), 'utf8', function() {
    console.log('mock metadata generated successfully');
  });
}
