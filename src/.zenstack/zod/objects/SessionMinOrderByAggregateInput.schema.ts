/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionMinOrderByAggregateInput>;
export const SessionMinOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), sessionToken: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), expires: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
