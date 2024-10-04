/* eslint-disable */
import { z } from 'zod';
import { ContractWhereInputObjectSchema } from './ContractWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractNullableRelationFilter>;
export const ContractNullableRelationFilterObjectSchema: SchemaType = z.object({
    is: z.union([z.lazy(() => ContractWhereInputObjectSchema),
    z.null()]).optional().nullable(), isNot: z.union([z.lazy(() => ContractWhereInputObjectSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
