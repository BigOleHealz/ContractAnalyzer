/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PushNotificationCountOrderByAggregateInputObjectSchema } from './PushNotificationCountOrderByAggregateInput.schema';
import { PushNotificationMaxOrderByAggregateInputObjectSchema } from './PushNotificationMaxOrderByAggregateInput.schema';
import { PushNotificationMinOrderByAggregateInputObjectSchema } from './PushNotificationMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationOrderByWithAggregationInput>;
export const PushNotificationOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), endpoint: z.lazy(() => SortOrderSchema).optional(), subscription: z.lazy(() => SortOrderSchema).optional(), dateCreated: z.lazy(() => SortOrderSchema).optional(), dateUpdated: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => PushNotificationCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => PushNotificationMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => PushNotificationMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
