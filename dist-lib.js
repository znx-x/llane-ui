const fs = require('fs');
const path = require('path');

// Function to copy files from source to destination
function copyFiles(srcPath, destPath) {
    fs.mkdirSync(destPath, { recursive: true }); // Ensure destination directory exists

    fs.readdirSync(srcPath, { withFileTypes: true }).forEach(entry => {
        let srcFile = path.join(srcPath, entry.name);
        let destFile = path.join(destPath, entry.name);
        if (entry.isDirectory()) {
            copyFiles(srcFile, destFile); // Recurse into subdirectories
        } else {
            fs.copyFileSync(srcFile, destFile);
        }
    });
}

// Paths for icons
const iconsSrcDir = path.join(__dirname, 'src/Icons/library');
const iconsDestDir = path.join(__dirname, 'dist/Icons/library');
copyFiles(iconsSrcDir, iconsDestDir);

// Paths for test assets
const testAssetsSrcDir = path.join(__dirname, 'src/TestingAssets');
const testAssetsDestDir = path.join(__dirname, 'dist/TestingAssets');
copyFiles(testAssetsSrcDir, testAssetsDestDir);

// Path for CSS
const cssSrcFile = path.join(__dirname, 'src/base.css');
const cssDestFile = path.join(__dirname, 'dist/base.css');
fs.copyFileSync(cssSrcFile, cssDestFile);
