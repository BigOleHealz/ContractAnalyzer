/* eslint-disable */
import { z } from 'zod';
import { ContractArgsObjectSchema } from './ContractArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseInclude>;
export const ClauseIncludeObjectSchema: SchemaType = z.object({
    contract: z.union([z.boolean(),
    z.lazy(() => ContractArgsObjectSchema)]).optional()
}).strict() as SchemaType;
