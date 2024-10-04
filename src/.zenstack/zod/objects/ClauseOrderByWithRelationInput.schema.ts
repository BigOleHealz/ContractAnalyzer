/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ContractOrderByWithRelationInputObjectSchema } from './ContractOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseOrderByWithRelationInput>;
export const ClauseOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), content: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), isImportant: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), aiAnalysis: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), contractId: z.lazy(() => SortOrderSchema).optional(), dateCreated: z.lazy(() => SortOrderSchema).optional(), dateUpdated: z.lazy(() => SortOrderSchema).optional(), contract: z.lazy(() => ContractOrderByWithRelationInputObjectSchema).optional()
}).strict() as SchemaType;
