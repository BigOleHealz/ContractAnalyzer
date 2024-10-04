/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseCountAggregateInputType>;
export const ClauseCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), content: z.literal(true).optional(), isImportant: z.literal(true).optional(), aiAnalysis: z.literal(true).optional(), contractId: z.literal(true).optional(), dateCreated: z.literal(true).optional(), dateUpdated: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
