/* eslint-disable */
import { z } from 'zod';
import { ContractSelectObjectSchema } from './ContractSelect.schema';
import { ContractIncludeObjectSchema } from './ContractInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractArgs>;
export const ContractArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => ContractSelectObjectSchema).optional(), include: z.lazy(() => ContractIncludeObjectSchema).optional()
}).strict() as SchemaType;
