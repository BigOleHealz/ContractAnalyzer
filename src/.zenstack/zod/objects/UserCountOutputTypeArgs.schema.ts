/* eslint-disable */
import { z } from 'zod';
import { UserCountOutputTypeSelectObjectSchema } from './UserCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCountOutputTypeArgs>;
export const UserCountOutputTypeArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => UserCountOutputTypeSelectObjectSchema).optional()
}).strict() as SchemaType;
