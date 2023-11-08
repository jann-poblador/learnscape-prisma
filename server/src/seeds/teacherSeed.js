import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function teacherSeed () {
  try {
    // const deleteProfile = prisma.profile.deleteMany()
    // const deleteUsers = prisma.teacher.deleteMany()
    // await prisma.$transaction([deleteProfile, deleteUsers])
    const teachers = await prisma.teacher.create({
      data: {
        profile: {
          create: {
            firstName: 'Test',
            middleName: 'Test',
            lastName: 'Test',
            username: 'Test',
            email: 'test@test.com'
          }
        }
      },
      include: {
        profile: true // Include the related profile
      }
    })
    console.log('Teachers results: ', teachers)
  } catch (err) {
    console.log('Error in TEACHERS seed file', err)
  } finally {
    await prisma.$disconnect()
  }
}

export default teacherSeed()
