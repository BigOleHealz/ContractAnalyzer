/* eslint-disable */
import { z } from 'zod';
import { ClauseSelectObjectSchema } from './ClauseSelect.schema';
import { ClauseIncludeObjectSchema } from './ClauseInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseArgs>;
export const ClauseArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => ClauseSelectObjectSchema).optional(), include: z.lazy(() => ClauseIncludeObjectSchema).optional()
}).strict() as SchemaType;
