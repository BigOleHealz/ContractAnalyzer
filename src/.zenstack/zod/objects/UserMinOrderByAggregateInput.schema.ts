/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserMinOrderByAggregateInput>;
export const UserMinOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), name: z.lazy(() => SortOrderSchema).optional(), email: z.lazy(() => SortOrderSchema).optional(), pictureUrl: z.lazy(() => SortOrderSchema).optional(), tokenInvitation: z.lazy(() => SortOrderSchema).optional(), emailVerified: z.lazy(() => SortOrderSchema).optional(), stripeCustomerId: z.lazy(() => SortOrderSchema).optional(), status: z.lazy(() => SortOrderSchema).optional(), globalRole: z.lazy(() => SortOrderSchema).optional(), password: z.lazy(() => SortOrderSchema).optional(), dateCreated: z.lazy(() => SortOrderSchema).optional(), dateUpdated: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
