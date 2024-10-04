/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseUncheckedCreateInput>;
export const ClauseUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), content: z.union([z.string(),
    z.null()]).optional().nullable(), isImportant: z.union([z.boolean(),
    z.null()]).optional().nullable(), aiAnalysis: z.union([z.string(),
    z.null()]).optional().nullable(), contractId: z.string(), dateCreated: z.union([z.date().optional(), z.string().datetime().optional()]), dateUpdated: z.union([z.date().optional(), z.string().datetime().optional()])
}).strict() as SchemaType;
