/* eslint-disable */
import { z } from 'zod';
import { AccountSelectObjectSchema } from './AccountSelect.schema';
import { AccountIncludeObjectSchema } from './AccountInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountArgs>;
export const AccountArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => AccountSelectObjectSchema).optional(), include: z.lazy(() => AccountIncludeObjectSchema).optional()
}).strict() as SchemaType;
