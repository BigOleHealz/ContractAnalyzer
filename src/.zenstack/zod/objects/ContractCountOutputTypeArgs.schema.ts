/* eslint-disable */
import { z } from 'zod';
import { ContractCountOutputTypeSelectObjectSchema } from './ContractCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractCountOutputTypeArgs>;
export const ContractCountOutputTypeArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => ContractCountOutputTypeSelectObjectSchema).optional()
}).strict() as SchemaType;
