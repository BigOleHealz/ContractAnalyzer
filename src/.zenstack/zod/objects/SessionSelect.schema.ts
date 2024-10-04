/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionSelect>;
export const SessionSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), sessionToken: z.boolean().optional(), userId: z.boolean().optional(), expires: z.boolean().optional(), user: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict() as SchemaType;
