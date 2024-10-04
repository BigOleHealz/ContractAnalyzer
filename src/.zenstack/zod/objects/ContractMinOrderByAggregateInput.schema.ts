/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractMinOrderByAggregateInput>;
export const ContractMinOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), content: z.lazy(() => SortOrderSchema).optional(), fileUrl: z.lazy(() => SortOrderSchema).optional(), status: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), dateCreated: z.lazy(() => SortOrderSchema).optional(), dateUpdated: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
