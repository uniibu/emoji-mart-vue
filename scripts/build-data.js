const build = require('./build')
const sets = ['messenger']

sets.forEach((set) => {
  build({
    output: `data/${set}.json`,
    sets: [set],
  })
})
