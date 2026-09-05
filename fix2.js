const fs = require('fs');
let content = fs.readFileSync('generate_site2.js', 'utf8');
content = content.replace(/\\\`/g, '\`');
content = content.replace(/\\\$/g, '$');
fs.writeFileSync('generate_site2.js', content);
