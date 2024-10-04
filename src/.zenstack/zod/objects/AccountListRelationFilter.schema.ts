/* eslint-disable */
import { z } from 'zod';
import { AccountWhereInputObjectSchema } from './AccountWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountListRelationFilter>;
export const AccountListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => AccountWhereInputObjectSchema).optional(), some: z.lazy(() => AccountWhereInputObjectSchema).optional(), none: z.lazy(() => AccountWhereInputObjectSchema).optional()
}).strict() as SchemaType;
