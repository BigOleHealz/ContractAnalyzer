/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseMaxOrderByAggregateInput>;
export const ClauseMaxOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), content: z.lazy(() => SortOrderSchema).optional(), isImportant: z.lazy(() => SortOrderSchema).optional(), aiAnalysis: z.lazy(() => SortOrderSchema).optional(), contractId: z.lazy(() => SortOrderSchema).optional(), dateCreated: z.lazy(() => SortOrderSchema).optional(), dateUpdated: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
