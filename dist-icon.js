const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src/Icons/library');
const destDir = path.join(__dirname, 'dist/Icons/library');

fs.mkdirSync(destDir, { recursive: true }); // Ensure destination directory exists

// Copy each file from source to destination
fs.readdirSync(srcDir).forEach(file => {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
});
