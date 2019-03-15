let {exec} = require('child_process')

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
let commands = [
  'cwd',
  'ls',
  'git add -A',
  `git push origin ${origin}`,
  `npm publish --tag ${tag}`,
  'cnpm sync npm-dyq-test'
].join('&')
const ls = exec(commands)

ls.stdout.on('data', (data) => {
  console.log(data);
});

