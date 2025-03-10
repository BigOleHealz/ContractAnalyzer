import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `
INSERT INTO "User" (
  "id",
  "email", 
  "name", 
  "globalRole",
  "pictureurl", 
  "password",
  "freeUsageUsed"
) VALUES (
  '21a857f1-ba5f-4435-bcf6-f910ec07c0dc',
  'test@test.com',
  'John Doe',
  'ADMIN',
  'https://i.imgur.com/sdjqd62.jpeg',
  '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC',
  false
);
  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
