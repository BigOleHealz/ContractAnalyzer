/* eslint-disable */
import { z } from 'zod';
import { SessionSelectObjectSchema } from './SessionSelect.schema';
import { SessionIncludeObjectSchema } from './SessionInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionArgs>;
export const SessionArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => SessionSelectObjectSchema).optional(), include: z.lazy(() => SessionIncludeObjectSchema).optional()
}).strict() as SchemaType;
