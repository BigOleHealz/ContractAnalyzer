/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationOrderByRelationAggregateInput>;
export const PushNotificationOrderByRelationAggregateInputObjectSchema: SchemaType = z.object({
    _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
