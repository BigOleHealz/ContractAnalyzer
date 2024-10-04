/* eslint-disable */
import { z } from 'zod';
import { ContractArgsObjectSchema } from './ContractArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseSelect>;
export const ClauseSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), content: z.boolean().optional(), isImportant: z.boolean().optional(), aiAnalysis: z.boolean().optional(), contractId: z.boolean().optional(), contract: z.union([z.boolean(),
    z.lazy(() => ContractArgsObjectSchema)]).optional(), dateCreated: z.boolean().optional(), dateUpdated: z.boolean().optional()
}).strict() as SchemaType;
