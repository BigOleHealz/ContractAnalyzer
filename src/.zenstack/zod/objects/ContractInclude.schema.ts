/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ClauseInputSchema } from '../input/ClauseInput.schema';
import { ContractCountOutputTypeArgsObjectSchema } from './ContractCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractInclude>;
export const ContractIncludeObjectSchema: SchemaType = z.object({
    user: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), clauses: z.union([z.boolean(),
    z.lazy(() => ClauseInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => ContractCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
