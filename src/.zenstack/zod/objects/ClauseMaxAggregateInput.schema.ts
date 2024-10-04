/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseMaxAggregateInputType>;
export const ClauseMaxAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), content: z.literal(true).optional(), isImportant: z.literal(true).optional(), aiAnalysis: z.literal(true).optional(), contractId: z.literal(true).optional(), dateCreated: z.literal(true).optional(), dateUpdated: z.literal(true).optional()
}).strict() as SchemaType;
