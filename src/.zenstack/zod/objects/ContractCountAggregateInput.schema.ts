/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractCountAggregateInputType>;
export const ContractCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), content: z.literal(true).optional(), fileUrl: z.literal(true).optional(), status: z.literal(true).optional(), userId: z.literal(true).optional(), dateCreated: z.literal(true).optional(), dateUpdated: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
