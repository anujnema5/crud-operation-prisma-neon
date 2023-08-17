import { PrismaClient } from "@prisma/client";

class prismaSingleton {
    private static instance: PrismaClient
    private constructor() { }

    static getInstance(): PrismaClient {
        if (!prismaSingleton.instance) {
            this.instance = new PrismaClient();
        }
        return this.instance;
    }
}

const prisma = prismaSingleton.getInstance();
export default prisma;