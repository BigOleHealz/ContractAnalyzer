/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseScalarWhereWithAggregatesInput>;
export const ClauseScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ClauseScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ClauseScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => ClauseScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ClauseScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ClauseScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), content: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), isImportant: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema),
    z.boolean(),
    z.null()]).optional().nullable(), aiAnalysis: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), contractId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), dateCreated: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), dateUpdated: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional()
}).strict() as SchemaType;
