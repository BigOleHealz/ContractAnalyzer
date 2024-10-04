/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionScalarWhereInput>;
export const SessionScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => SessionScalarWhereInputObjectSchema),
    z.lazy(() => SessionScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => SessionScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => SessionScalarWhereInputObjectSchema),
    z.lazy(() => SessionScalarWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), sessionToken: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), userId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), expires: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional()
}).strict() as SchemaType;
