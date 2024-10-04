/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SessionCountOrderByAggregateInputObjectSchema } from './SessionCountOrderByAggregateInput.schema';
import { SessionMaxOrderByAggregateInputObjectSchema } from './SessionMaxOrderByAggregateInput.schema';
import { SessionMinOrderByAggregateInputObjectSchema } from './SessionMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionOrderByWithAggregationInput>;
export const SessionOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), sessionToken: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), expires: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => SessionCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => SessionMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => SessionMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
