/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput>;
export const SessionScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), sessionToken: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), expires: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional()
}).strict() as SchemaType;
