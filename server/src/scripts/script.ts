import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main () {
  console.log('Script is running now.')
}

main()
  .catch(e => {
    console.error(e.message)
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect()
  })
