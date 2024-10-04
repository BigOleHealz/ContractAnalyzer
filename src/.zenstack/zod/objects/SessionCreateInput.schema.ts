/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutSessionsInputObjectSchema } from './UserCreateNestedOneWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionCreateInput>;
export const SessionCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), sessionToken: z.string(), expires: z.union([z.date(), z.string().datetime()]), user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema)
}).strict() as SchemaType;
