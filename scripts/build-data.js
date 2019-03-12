const build = require('./build')
let sets = ['apple', 'emojione', 'facebook', 'google', 'messenger', 'twitter']
const envSets = process.env.SETS
if(envSets) {
  sets = envSets.split(',')
}


build({ output: 'data/all.json' })
sets.forEach((set) => {
  build({
    output: `data/${set}.json`,
    sets: [set],
  })
})
