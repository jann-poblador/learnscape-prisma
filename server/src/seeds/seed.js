// import adminSeed from './adminSeed.js'
import teacherSeed from './teacherSeed.js'
// import seriesSeed from "./seriesSeed.js"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function runSeeds () {
  try {
    // const seed1 = await adminSeed()
    const seed2 = await teacherSeed()

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (seed2) { // && seed2
      console.log('Seed/s successful!')
    }
  } catch (err) {
    console.log('Error in seeds..')
  }
}

void runSeeds()
