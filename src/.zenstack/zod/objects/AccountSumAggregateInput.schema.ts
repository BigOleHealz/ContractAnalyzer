/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountSumAggregateInputType>;
export const AccountSumAggregateInputObjectSchema: SchemaType = z.object({
    expires_at: z.literal(true).optional(), refresh_token_expires_in: z.literal(true).optional()
}).strict() as SchemaType;
