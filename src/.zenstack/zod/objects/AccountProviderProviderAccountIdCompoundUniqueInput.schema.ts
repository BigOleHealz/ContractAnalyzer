/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput>;
export const AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema: SchemaType = z.object({
    provider: z.string(), providerAccountId: z.string()
}).strict() as SchemaType;
