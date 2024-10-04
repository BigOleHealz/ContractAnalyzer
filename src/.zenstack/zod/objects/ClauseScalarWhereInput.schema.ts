/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseScalarWhereInput>;
export const ClauseScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ClauseScalarWhereInputObjectSchema),
    z.lazy(() => ClauseScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ClauseScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ClauseScalarWhereInputObjectSchema),
    z.lazy(() => ClauseScalarWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), content: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), isImportant: z.union([z.lazy(() => BoolNullableFilterObjectSchema),
    z.boolean(),
    z.null()]).optional().nullable(), aiAnalysis: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), contractId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), dateCreated: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), dateUpdated: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional()
}).strict() as SchemaType;
