/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserCountOrderByAggregateInputObjectSchema } from './UserCountOrderByAggregateInput.schema';
import { UserMaxOrderByAggregateInputObjectSchema } from './UserMaxOrderByAggregateInput.schema';
import { UserMinOrderByAggregateInputObjectSchema } from './UserMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserOrderByWithAggregationInput>;
export const UserOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), name: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), email: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), pictureUrl: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), tokenInvitation: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), emailVerified: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), stripeCustomerId: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), status: z.lazy(() => SortOrderSchema).optional(), globalRole: z.lazy(() => SortOrderSchema).optional(), password: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), dateCreated: z.lazy(() => SortOrderSchema).optional(), dateUpdated: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
