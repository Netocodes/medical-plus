const fs = require('fs');
const path = './node_modules/.bin/tailwindcss';

fs.chmod(path, 0o755, (err) => {
  if (err) {
    console.error(`Error setting executable permission for ${path}:`, err);
  } else {
    console.log(`Executable permission set for ${path}`);
  }
});

