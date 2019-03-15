let {execSync} = require('child_process')

let tag = 'latest'
let origin = 'master'
process.argv.forEach(item => {
  if (/^tag=/.test(item)) {
    item = item.replace(/\s/g, '') // 去除空格
    tag = item.replace(/^tag=/, '')
  } else if (/^origin=/.test(item)) {
    origin = item.replace(/^origin=/, '')
  }
})
let commands = [
  'git add -A',
  `git push origin ${origin}`,
  `npm publish --tag ${tag}`,
  'cnpm sync npm-dyq-test'
]
commands.forEach(command => {
  console.log(execSync(command))
})
