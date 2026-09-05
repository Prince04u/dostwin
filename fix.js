const fs = require('fs');
let content = fs.readFileSync('generate_site.js', 'utf8');
content = content.replace(/\\\`/g, '\`');
content = content.replace(/\\\$/g, '$');
fs.writeFileSync('generate_site.js', content);
