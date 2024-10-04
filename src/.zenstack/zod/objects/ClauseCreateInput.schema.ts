/* eslint-disable */
import { z } from 'zod';
import { ContractCreateNestedOneWithoutClausesInputObjectSchema } from './ContractCreateNestedOneWithoutClausesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseCreateInput>;
export const ClauseCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), content: z.union([z.string(),
    z.null()]).optional().nullable(), isImportant: z.union([z.boolean(),
    z.null()]).optional().nullable(), aiAnalysis: z.union([z.string(),
    z.null()]).optional().nullable(), dateCreated: z.union([z.date().optional(), z.string().datetime().optional()]), dateUpdated: z.union([z.date().optional(), z.string().datetime().optional()]), contract: z.lazy(() => ContractCreateNestedOneWithoutClausesInputObjectSchema).optional()
}).strict() as SchemaType;
