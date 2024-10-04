/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractCreateManyUserInput>;
export const ContractCreateManyUserInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), content: z.union([z.string(),
    z.null()]).optional().nullable(), fileUrl: z.union([z.string(),
    z.null()]).optional().nullable(), status: z.union([z.string(),
    z.null()]).optional().nullable(), dateCreated: z.union([z.date().optional(), z.string().datetime().optional()]), dateUpdated: z.union([z.date().optional(), z.string().datetime().optional()])
}).strict() as SchemaType;
