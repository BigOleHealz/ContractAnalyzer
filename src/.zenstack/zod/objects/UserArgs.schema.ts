/* eslint-disable */
import { z } from 'zod';
import { UserSelectObjectSchema } from './UserSelect.schema';
import { UserIncludeObjectSchema } from './UserInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserArgs>;
export const UserArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => UserSelectObjectSchema).optional(), include: z.lazy(() => UserIncludeObjectSchema).optional()
}).strict() as SchemaType;
