import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function adminSeed () {
  try {
    // const deleteProfile = prisma.profile.deleteMany()
    // const deleteUsers = prisma.admin.deleteMany()
    // await prisma.$transaction([deleteProfile, deleteUsers])
    const admin = await prisma.admin.create({
      data: {
        profile: {
          create: {
            firstName: 'Super',
            lastName: 'Admin',
            username: 'admin',
            email: 'admin@test.com'
          }
        }
      },
      include: {
        profile: true // Include the related profile
      }
    })
    console.log('Admins results: ', admin)
    await prisma.admin.findMany({
      include: {
        profile: true
      }
    })
  } catch (err) {
    console.log('Error in ADMIN seed file', err)
  } finally {
    await prisma.$disconnect()
  }
}

export default adminSeed()
