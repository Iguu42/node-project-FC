import * as dotenv from 'dotenv';
dotenv.config()
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();