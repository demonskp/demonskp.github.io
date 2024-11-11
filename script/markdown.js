const fs = require('fs');
const path = require('path');

const mddir = path.resolve(__dirname, '../src/assets/markdown')

function readAllInfo(dirPath) {
  const dirs = fs.readdirSync(dirPath);
  const result = [];
  dirs.forEach(fileName=>{
    if(!fileName.endsWith('.md')) return;
    let name = fileName.split('.');
    name.pop();
    name = name.join('.');
    const fileInfo = fs.statSync(path.resolve(dirPath, fileName));
    const fileStr = fs.readFileSync(path.resolve(dirPath, fileName), {encoding:"utf-8"});

    result.push({
      id: name,
      title: name,
      description: fileStr.slice(0, 100).replace('\n')+'...',
      createTime: fileInfo.mtime.getTime(),
      tags: [],
    })
  })
  console.log(result)
}

readAllInfo(mddir)