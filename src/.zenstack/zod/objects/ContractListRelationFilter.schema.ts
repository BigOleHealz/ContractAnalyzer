/* eslint-disable */
import { z } from 'zod';
import { ContractWhereInputObjectSchema } from './ContractWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractListRelationFilter>;
export const ContractListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => ContractWhereInputObjectSchema).optional(), some: z.lazy(() => ContractWhereInputObjectSchema).optional(), none: z.lazy(() => ContractWhereInputObjectSchema).optional()
}).strict() as SchemaType;
