/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractCountOutputTypeSelect>;
export const ContractCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    clauses: z.boolean().optional()
}).strict() as SchemaType;
