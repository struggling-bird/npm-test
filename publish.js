let childProcess = require('child_process')

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
childProcess.exec(commands, (err, out) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(out)
})
// 编译代码
// git commit
// git push
// publish
// sync
