let {spawn} = require('child_process')

let tag = 'latest'
let origin = 'master'
process.argv.forEach(item => {
  if (/^tag=/.test(item)) {
    item = item.replace(/\s/g, '') // 去除空格
    tag = item.replace(/^tag=/, '')
  } else if (/^origin=/) {
    origin = item.replace(/^origin=/, '')
  }
})
console.log('version tag: ', tag)
let commands = [
  'git add -A',
  `git push origin ${origin}`,
  `npm publish --tag ${tag}`,
  'cnpm sync npm-dyq-test'
].join('&')
const ls = spawn(commands)

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

// 编译代码
// git commit
// git push
// publish
// sync
