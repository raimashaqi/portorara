const fs = require('fs');
const path = require('path');

function walk(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const p = path.resolve(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p, files);
    } else {
      files.push(p);
    }
  }
  return files;
}

const files = walk('src');
let errCount = 0;

files.forEach(f => {
  if (!f.endsWith('.js') && !f.endsWith('.jsx')) return;
  const c = fs.readFileSync(f, 'utf8');
  const regex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;
  let m;
  while ((m = regex.exec(c))) {
    let imp = m[1];
    if (imp.startsWith('.')) {
      const fullPath = path.resolve(path.dirname(f), imp);
      const ext = path.extname(fullPath) ? '' : (fs.existsSync(fullPath + '.jsx') ? '.jsx' : (fs.existsSync(fullPath + '.js') ? '.js' : ''));
      const testPath = fullPath + ext;
      if (fs.existsSync(testPath)) {
        const base = path.basename(testPath);
        const realList = fs.readdirSync(path.dirname(testPath));
        if (!realList.includes(base)) {
          console.log('CASE MISMATCH in ' + f + ': ' + imp + ' (real file: ' + realList.find(r => r.toLowerCase() === base.toLowerCase()) + ')');
          errCount++;
        }
      }
    }
  }
});

if (errCount === 0) console.log('No case mismatch found!');
