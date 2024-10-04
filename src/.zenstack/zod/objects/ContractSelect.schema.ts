/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ClauseInputSchema } from '../input/ClauseInput.schema';
import { ContractCountOutputTypeArgsObjectSchema } from './ContractCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractSelect>;
export const ContractSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), content: z.boolean().optional(), fileUrl: z.boolean().optional(), status: z.boolean().optional(), userId: z.boolean().optional(), user: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), clauses: z.union([z.boolean(),
    z.lazy(() => ClauseInputSchema.findMany)]).optional(), dateCreated: z.boolean().optional(), dateUpdated: z.boolean().optional(), _count: z.union([z.boolean(),
    z.lazy(() => ContractCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
