import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function getTeachers (req, res) {
  try {
    const teachers = await prisma.teacher.findMany({
      include: {
        profile: true
      }
    })
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (teachers) {
      res.send(teachers)
    }
  } catch (err) {
    res.send(err, 'ERROR: There are no records in Teachers!')
  }
}

const teacherController = { getTeachers }

export default teacherController
