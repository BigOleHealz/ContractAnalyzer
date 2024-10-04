/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ClauseOrderByRelationAggregateInputObjectSchema } from './ClauseOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractOrderByWithRelationInput>;
export const ContractOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), content: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), fileUrl: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), status: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), userId: z.lazy(() => SortOrderSchema).optional(), dateCreated: z.lazy(() => SortOrderSchema).optional(), dateUpdated: z.lazy(() => SortOrderSchema).optional(), user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(), clauses: z.lazy(() => ClauseOrderByRelationAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
