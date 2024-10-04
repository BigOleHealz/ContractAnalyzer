/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountAvgOrderByAggregateInput>;
export const AccountAvgOrderByAggregateInputObjectSchema: SchemaType = z.object({
    expires_at: z.lazy(() => SortOrderSchema).optional(), refresh_token_expires_in: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
