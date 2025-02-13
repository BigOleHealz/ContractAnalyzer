import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureurl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('60f36a2e-d343-4b4f-898f-deaaf5c15856', '10Clement71@gmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=12', 'invitation123', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "User" ("id", "email", "name", "pictureurl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('3253987a-2e58-47df-a16e-00f4c154184f', '19Era3@hotmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=21', 'invitation456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureurl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('37a277a4-ca6a-44e4-856d-d658166590fe', '28Candido_Hoppe@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=30', 'invitation101', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureurl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('47217012-30fe-423c-b2ac-5f319620b8b5', '37Giuseppe.Hintz32@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=39', 'invitation456', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureurl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('05b8779c-0288-4558-86b8-2c4249f903c2', '46Elyssa3@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=48', 'invitation456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureurl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('e2ac4254-a58f-408e-956a-5b8d0028e22e', '55Hilda.Berge@yahoo.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=57', 'invitation112', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureurl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('0b0ecc74-4410-4d19-a40b-3681f6618b55', '64Devyn.Rowe45@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=66', 'invitation101', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureurl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('4321a8db-76f2-491b-aea3-3dd3636dbe1b', '73Tess.Langworth@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'invitation789', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureurl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('e31f0ffe-5123-4769-a016-ecbe10bbeaca', '82Jaiden_Schuppe66@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=84', 'invitation456', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');


INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('da8e75af-83e1-4cb4-b646-870fbbf64879', 'httpsexample.comnotify2', 'tier1_test', '37a277a4-ca6a-44e4-856d-d658166590fe');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('e324247a-bcbe-4f2d-8b57-ca5731b0e429', 'httpsexample.comnotify1', 'tier2_test', '4321a8db-76f2-491b-aea3-3dd3636dbe1b');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('bd6ab78d-6f4a-4284-b8cc-b073988f09cc', 'httpsexample.comnotify3', 'tier3_test', 'e2ac4254-a58f-408e-956a-5b8d0028e22e');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('b7a314e9-4d81-463b-a6b1-3b0f1d1a2e7e', 'httpsexample.comnotify1', 'tier3_test', '37a277a4-ca6a-44e4-856d-d658166590fe');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('075f9931-2504-44fd-82a0-f96fea4cc88b', 'httpsexample.comnotify5', 'tier3_test', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('8543ae1d-32c5-415c-9315-094e139689a1', 'httpsexample.comnotify2', 'tier3_test', '3253987a-2e58-47df-a16e-00f4c154184f');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('33503185-d477-4222-94d0-c7a5874f0a42', 'httpsexample.comnotify5', 'tier2_test', '05b8779c-0288-4558-86b8-2c4249f903c2');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('92c5c1d8-0466-429e-a83f-590f21296cb9', 'httpsexample.comnotify5', 'tier2_test', 'e2ac4254-a58f-408e-956a-5b8d0028e22e');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('23df4cf7-af69-4da6-8b31-c5fd02779372', 'httpsexample.comnotify4', 'tier3_test', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('dac734be-433f-4540-8f16-6855779b2c94', 'httpsexample.comnotify3', 'tier1_test', '4321a8db-76f2-491b-aea3-3dd3636dbe1b');



INSERT INTO "Contract" ("id", "content", "fileUrl", "status", "userId") VALUES ('9f43be28-6414-46b8-836e-e922296207e0', 'The Contractor agrees to perform the services described in Exhibit A...', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=122', 'approved', '37a277a4-ca6a-44e4-856d-d658166590fe');
INSERT INTO "Contract" ("id", "content", "fileUrl", "status", "userId") VALUES ('63a14c56-64e8-4062-bf18-3b986aa2ae8d', 'The Tenant shall pay the Landlord the monthly rent of...', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=126', 'pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Contract" ("id", "content", "fileUrl", "status", "userId") VALUES ('a04749a6-07ff-4cd4-b2f1-c1a9a636ec0e', 'The Tenant shall pay the Landlord the monthly rent of...', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=130', 'approved', '05b8779c-0288-4558-86b8-2c4249f903c2');
INSERT INTO "Contract" ("id", "content", "fileUrl", "status", "userId") VALUES ('586c5742-ed61-495a-aaa5-17328c2312cd', 'The Tenant shall pay the Landlord the monthly rent of...', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=134', 'pending', '05b8779c-0288-4558-86b8-2c4249f903c2');
INSERT INTO "Contract" ("id", "content", "fileUrl", "status", "userId") VALUES ('1e764485-27c4-4942-9889-b617c33fc992', 'In the event of any dispute arising out of or relating to this Agreement...', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=138', 'inprogress', '0b0ecc74-4410-4d19-a40b-3681f6618b55');
INSERT INTO "Contract" ("id", "content", "fileUrl", "status", "userId") VALUES ('f02121e2-f698-487c-bc2c-6d0b21a6cc17', 'The Tenant shall pay the Landlord the monthly rent of...', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=142', 'pending', '37a277a4-ca6a-44e4-856d-d658166590fe');
INSERT INTO "Contract" ("id", "content", "fileUrl", "status", "userId") VALUES ('94af9c1f-9dae-4f79-8c57-730e847c1574', 'The Tenant shall pay the Landlord the monthly rent of...', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=146', 'reviewed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Contract" ("id", "content", "fileUrl", "status", "userId") VALUES ('c518d4fa-1cce-4ad8-9867-487c295992c2', 'The Tenant shall pay the Landlord the monthly rent of...', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=150', 'pending', '0b0ecc74-4410-4d19-a40b-3681f6618b55');
INSERT INTO "Contract" ("id", "content", "fileUrl", "status", "userId") VALUES ('ef3d21af-4b03-4c45-b3d6-bd9da0963352', 'In the event of any dispute arising out of or relating to this Agreement...', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=154', 'approved', '47217012-30fe-423c-b2ac-5f319620b8b5');
INSERT INTO "Contract" ("id", "content", "fileUrl", "status", "userId") VALUES ('7e827aa3-b7d2-428a-b56a-6c32b44311c8', 'This License Agreement grants the Licensee a nonexclusive nontransferable license to use...', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=158', 'approved', '4321a8db-76f2-491b-aea3-3dd3636dbe1b');


INSERT INTO "Clause" ("id", "content", "isImportant", "aiAnalysis", "contractId") VALUES ('36e06712-41d9-4c4f-86db-299959fe5026', 'The lessee agrees to maintain the property in good condition and repair any damages caused during the lease period.', true, 'The service providers right to terminate could leave the client without services unexpectedly.', '586c5742-ed61-495a-aaa5-17328c2312cd');
INSERT INTO "Clause" ("id", "content", "isImportant", "aiAnalysis", "contractId") VALUES ('314b8422-c6ea-4e53-8ab9-07b12d2b41d6', 'The employee agrees to a noncompete clause for a period of 12 months after termination of employment.', true, 'This clause obligates the lessee to cover repair costs which could be significant.', 'ef3d21af-4b03-4c45-b3d6-bd9da0963352');
INSERT INTO "Clause" ("id", "content", "isImportant", "aiAnalysis", "contractId") VALUES ('c2c4cf81-a4de-4399-8523-75c2c7ad90a6', 'The lessee agrees to maintain the property in good condition and repair any damages caused during the lease period.', false, 'This clause obligates the lessee to cover repair costs which could be significant.', 'ef3d21af-4b03-4c45-b3d6-bd9da0963352');
INSERT INTO "Clause" ("id", "content", "isImportant", "aiAnalysis", "contractId") VALUES ('f9f7e1bb-4557-4698-a588-b6223a086ece', 'The purchaser acknowledges that the product is sold as is without any warranties.', true, 'The service providers right to terminate could leave the client without services unexpectedly.', '63a14c56-64e8-4062-bf18-3b986aa2ae8d');
INSERT INTO "Clause" ("id", "content", "isImportant", "aiAnalysis", "contractId") VALUES ('fe435df7-89b2-4267-baec-a36f46ca6f78', 'The lessee agrees to maintain the property in good condition and repair any damages caused during the lease period.', true, 'The service providers right to terminate could leave the client without services unexpectedly.', '1e764485-27c4-4942-9889-b617c33fc992');
INSERT INTO "Clause" ("id", "content", "isImportant", "aiAnalysis", "contractId") VALUES ('c521d99a-9e7a-4b7b-a7a6-18ac287f3532', 'The lessee agrees to maintain the property in good condition and repair any damages caused during the lease period.', false, 'The short repayment period may lead to financial strain for the borrower.', '7e827aa3-b7d2-428a-b56a-6c32b44311c8');
INSERT INTO "Clause" ("id", "content", "isImportant", "aiAnalysis", "contractId") VALUES ('b9f3d14c-1d45-41c5-9e3a-b50fc11b8fd0', 'The purchaser acknowledges that the product is sold as is without any warranties.', false, 'The service providers right to terminate could leave the client without services unexpectedly.', 'f02121e2-f698-487c-bc2c-6d0b21a6cc17');
INSERT INTO "Clause" ("id", "content", "isImportant", "aiAnalysis", "contractId") VALUES ('eecf2e5e-1122-4331-96f6-6f542b35af99', 'The service provider reserves the right to terminate the agreement with 30 days notice.', false, 'The service providers right to terminate could leave the client without services unexpectedly.', '1e764485-27c4-4942-9889-b617c33fc992');
INSERT INTO "Clause" ("id", "content", "isImportant", "aiAnalysis", "contractId") VALUES ('bf1f4c65-434f-4996-af07-a0270a2257f1', 'The lessee agrees to maintain the property in good condition and repair any damages caused during the lease period.', false, 'The noncompete clause could limit the employees future job opportunities.', '94af9c1f-9dae-4f79-8c57-730e847c1574');
INSERT INTO "Clause" ("id", "content", "isImportant", "aiAnalysis", "contractId") VALUES ('ac826e92-f9e6-4c5e-8b32-36a356decdf6', 'The service provider reserves the right to terminate the agreement with 30 days notice.', false, 'The as is condition means the purchaser has no recourse if the product is defective.', 'ef3d21af-4b03-4c45-b3d6-bd9da0963352');

INSERT INTO "SubscriptionTier" ("id", "title", "description", "contractsMonthyly", "stripeProductId", "features") VALUES ('tier1_test', 'Basic', 'Perfect for individuals and freelancers', 10, 'prod_Rl77IUC2DgKz58', ARRAY['10 contract analyses per month', 'Basic clause highlighting', '24/7 customer support']);
INSERT INTO "SubscriptionTier" ("id", "title", "description", "contractsMonthyly", "stripeProductId", "features") VALUES ('tier2_test', 'Pro', 'Ideal for small businesses and frequent users', 30, 'prod_Rl6KP5JJEqtt85', ARRAY['30 contract analyses per month', 'Advanced clause interpretation', 'Custom alert settings', 'Priority support']);
INSERT INTO "SubscriptionTier" ("id", "title", "description", "contractsMonthyly", "stripeProductId", "features") VALUES ('tier3_test', 'Enterprise', 'Tailored solutions for large organizations', 100, 'prod_Rl6L6tIAhw7Mcv', ARRAY['100 contract analyses per month', 'API access for integration', 'Dedicated account manager', 'Custom AI training']);

INSERT INTO "SubscriptionTier" ("id", "title", "description", "contractsMonthyly", "stripeProductId", "features") VALUES ('tier1_live', 'Basic', 'Perfect for individuals and freelancers', 10, 'prod_RkyifT9neHbBxw', ARRAY['10 contract analyses per month', 'Basic clause highlighting', '24/7 customer support']);
INSERT INTO "SubscriptionTier" ("id", "title", "description", "contractsMonthyly", "stripeProductId", "features") VALUES ('tier2_live', 'Pro', 'Ideal for small businesses and frequent users', 30, 'prod_Rl17aczoCxhe0r', ARRAY['30 contract analyses per month', 'Advanced clause interpretation', 'Custom alert settings', 'Priority support']);
INSERT INTO "SubscriptionTier" ("id", "title", "description", "contractsMonthyly", "stripeProductId", "features") VALUES ('tier3_live', 'Enterprise', 'Tailored solutions for large organizations', 100, 'prod_Rl1rZPOzih1Ypp', ARRAY['100 contract analyses per month', 'API access for integration', 'Dedicated account manager', 'Custom AI training']);


INSERT INTO "Subscription" ("id", "userId", "plan", "isActive", "startDate", "endDate") VALUES ('1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p', '60f36a2e-d343-4b4f-898f-deaaf5c15856', 'tier1_test', false, '2023-01-01T00:00:00.000Z', '2023-02-28T23:59:59.999Z');
INSERT INTO "Subscription" ("id", "userId", "plan", "isActive", "startDate", "endDate") VALUES ('4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s', '60f36a2e-d343-4b4f-898f-deaaf5c15856', 'tier3_test', false, '2023-04-01T00:00:00.000Z', '2023-05-31T23:59:59.999Z');
INSERT INTO "Subscription" ("id", "userId", "plan", "isActive", "startDate", "endDate") VALUES ('7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v', '60f36a2e-d343-4b4f-898f-deaaf5c15856', 'tier2_test', true, '2023-07-01T00:00:00.000Z', NULL);
INSERT INTO "Subscription" ("id", "userId", "plan", "isActive", "startDate", "endDate") VALUES ('3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r', '37a277a4-ca6a-44e4-856d-d658166590fe', 'tier1_test', false, '2023-03-01T00:00:00.000Z', '2023-05-31T23:59:59.999Z');
INSERT INTO "Subscription" ("id", "userId", "plan", "isActive", "startDate", "endDate") VALUES ('3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p348f', '37a277a4-ca6a-44e4-856d-d658166590fe', 'tier2_test', false, '2023-06-01T00:00:00.000Z', '2023-06-30T23:59:59.999Z');
INSERT INTO "Subscription" ("id", "userId", "plan", "isActive", "startDate", "endDate") VALUES ('6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u', '37a277a4-ca6a-44e4-856d-d658166590fe', 'tier3_test', true, '2023-08-01T00:00:00.000Z', NULL);
INSERT INTO "Subscription" ("id", "userId", "plan", "isActive", "startDate", "endDate") VALUES ('2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q', '3253987a-2e58-47df-a16e-00f4c154184f', 'tier2_test', false, '2023-02-01T00:00:00.000Z', '2023-07-30T23:59:59.999Z');
INSERT INTO "Subscription" ("id", "userId", "plan", "isActive", "startDate", "endDate") VALUES ('8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w', '3253987a-2e58-47df-a16e-00f4c154184f', 'tier3_test', true, '2023-08-01T00:00:00.000Z', NULL);

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
