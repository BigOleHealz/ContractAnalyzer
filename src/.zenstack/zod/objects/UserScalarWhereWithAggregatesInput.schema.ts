/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { EnumUserStatusWithAggregatesFilterObjectSchema } from './EnumUserStatusWithAggregatesFilter.schema';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserScalarWhereWithAggregatesInput>;
export const UserScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), pictureUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), tokenInvitation: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), emailVerified: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema),
    z.boolean(),
    z.null()]).optional().nullable(), stripeCustomerId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => EnumUserStatusWithAggregatesFilterObjectSchema),
    z.lazy(() => UserStatusSchema)]).optional(), globalRole: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), password: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), dateCreated: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), dateUpdated: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional()
}).strict() as SchemaType;
