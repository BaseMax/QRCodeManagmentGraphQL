import { faker } from '@faker-js/faker';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function generateFakeData() {
  return {
    slug: faker.lorem.slug(),
    image: faker.image.imageUrl(),
    data: faker.lorem.sentence(), 
  };
}
async function seedDatabase() {
  for (let i = 0; i < 10; i++) {
    const data = generateFakeData();
    await prisma.qRCode.create({ data });
  }
}

seedDatabase()
  .then(() => {
    console.log('Database seeded successfully!');
    prisma.$disconnect();
  })
  .catch((error) => {
    console.error(error);
    prisma.$disconnect();
  });
