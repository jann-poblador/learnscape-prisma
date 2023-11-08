import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function getAdmins (req, res) {
  try {
    const admins = await prisma.admin.findMany({
      include: {
        profile: true
      }
    })
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (admins) {
      res.send(admins)
    }
  } catch (err) {
    res.send(err, 'ERROR: There are no records in Admins!')
  }
}

// async function postAdmins (req, res) {
//   try {
//     const formData = req.body

//     if (!formData.fname || !formData.lname || !formData.email || !formData.mobile) {
//       return res.status(400).json({ error: 'Required fields missing' });
//     }

//     // Insert data database
//     const result = await prisma.users.create({
//       data: {
//         fname: formData.fname,
//         lname: formData.lname,
//         email: formData.email,
//         mobile: formData.mobile
//         // address: {
//         //     create: {
//         //         country: formData.address.country,
//         //         city: formData.address.city,
//         //         street: formData.address.street,
//         //     },
//         // },
//       },
//     });

//     await prisma.address.create({
//       data: {
//         User: {
//           connect: { id:result.id }
//         },
//         country: req.body.address.country,
//         city: req.body.address.city,
//         street: req.body.address.street
//       }
//     })

//     res.status(200).json({ message: 'Form data inserted successfully', userId: result.id })
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ error: 'Internal Server Error' })
//   }
// }

const adminController = { getAdmins }

export default adminController
