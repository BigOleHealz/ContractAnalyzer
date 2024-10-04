/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput>;
export const AccountScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), provider: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), providerAccountId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), refresh_token: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), access_token: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), expires_at: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
    z.number(),
    z.null()]).optional().nullable(), token_type: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), scope: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), id_token: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), session_state: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), refresh_token_expires_in: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
    z.number(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
