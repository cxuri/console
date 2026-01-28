import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("Rivoa#123@", 10);
  await prisma.user.upsert({
    where: { email: 'rivoatech@gmail.com' },
    update: {},
    create: {
      email: 'rivoatech@gmail.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
}

main();
