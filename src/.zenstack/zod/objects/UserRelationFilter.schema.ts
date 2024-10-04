/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserRelationFilter>;
export const UserRelationFilterObjectSchema: SchemaType = z.object({
    is: z.lazy(() => UserWhereInputObjectSchema).optional(), isNot: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
