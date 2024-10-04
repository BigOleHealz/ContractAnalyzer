/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ContractCountOrderByAggregateInputObjectSchema } from './ContractCountOrderByAggregateInput.schema';
import { ContractMaxOrderByAggregateInputObjectSchema } from './ContractMaxOrderByAggregateInput.schema';
import { ContractMinOrderByAggregateInputObjectSchema } from './ContractMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractOrderByWithAggregationInput>;
export const ContractOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), content: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), fileUrl: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), status: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), userId: z.lazy(() => SortOrderSchema).optional(), dateCreated: z.lazy(() => SortOrderSchema).optional(), dateUpdated: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => ContractCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => ContractMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => ContractMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
