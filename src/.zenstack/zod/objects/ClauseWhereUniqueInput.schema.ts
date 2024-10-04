/* eslint-disable */
import { z } from 'zod';
import { ClauseWhereInputObjectSchema } from './ClauseWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ContractNullableRelationFilterObjectSchema } from './ContractNullableRelationFilter.schema';
import { ContractWhereInputObjectSchema } from './ContractWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseWhereUniqueInput>;
export const ClauseWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => ClauseWhereInputObjectSchema),
    z.lazy(() => ClauseWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ClauseWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ClauseWhereInputObjectSchema),
    z.lazy(() => ClauseWhereInputObjectSchema).array()]).optional(), content: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), isImportant: z.union([z.lazy(() => BoolNullableFilterObjectSchema),
    z.boolean(),
    z.null()]).optional().nullable(), aiAnalysis: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), contractId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), dateCreated: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), dateUpdated: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), contract: z.union([z.lazy(() => ContractNullableRelationFilterObjectSchema),
    z.lazy(() => ContractWhereInputObjectSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
