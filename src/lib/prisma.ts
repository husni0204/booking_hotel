<<<<<<< HEAD
import { PrismaClient } from "@prisma/client/";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// import { PrismaClient } from "@prisma/client/extension";
// import { withAccelerate } from "@prisma/extension-accelerate";
=======
// import { PrismaClient } from "@/generated/prisma/client"
// import { withAccelerate } from "@prisma/extension-accelerate"
>>>>>>> f560fe8db39d3cd7a8eba3363cc7302f8d5eed20

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

<<<<<<< HEAD
// export const prisma = globalForPrisma.prisma;

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
=======
// export const prisma = globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma



import { PrismaClient } from "@/prisma/src/generated/prisma";
// import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
>>>>>>> f560fe8db39d3cd7a8eba3363cc7302f8d5eed20
