/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractScalarWhereWithAggregatesInput>;
export const ContractScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ContractScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ContractScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => ContractScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ContractScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ContractScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), content: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), fileUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), dateCreated: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), dateUpdated: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional()
}).strict() as SchemaType;
