/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserNullableRelationFilter>;
export const UserNullableRelationFilterObjectSchema: SchemaType = z.object({
    is: z.union([z.lazy(() => UserWhereInputObjectSchema),
    z.null()]).optional().nullable(), isNot: z.union([z.lazy(() => UserWhereInputObjectSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
