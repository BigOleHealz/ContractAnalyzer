/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClauseCountOrderByAggregateInputObjectSchema } from './ClauseCountOrderByAggregateInput.schema';
import { ClauseMaxOrderByAggregateInputObjectSchema } from './ClauseMaxOrderByAggregateInput.schema';
import { ClauseMinOrderByAggregateInputObjectSchema } from './ClauseMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseOrderByWithAggregationInput>;
export const ClauseOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), content: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), isImportant: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), aiAnalysis: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), contractId: z.lazy(() => SortOrderSchema).optional(), dateCreated: z.lazy(() => SortOrderSchema).optional(), dateUpdated: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => ClauseCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => ClauseMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => ClauseMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
