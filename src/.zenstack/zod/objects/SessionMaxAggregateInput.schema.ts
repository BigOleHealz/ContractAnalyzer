/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionMaxAggregateInputType>;
export const SessionMaxAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), sessionToken: z.literal(true).optional(), userId: z.literal(true).optional(), expires: z.literal(true).optional()
}).strict() as SchemaType;
