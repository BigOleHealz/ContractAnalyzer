/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionInclude>;
export const SessionIncludeObjectSchema: SchemaType = z.object({
    user: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict() as SchemaType;
