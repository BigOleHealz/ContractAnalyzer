/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationScalarWhereWithAggregatesInput>;
export const PushNotificationScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => PushNotificationScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => PushNotificationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => PushNotificationScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => PushNotificationScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => PushNotificationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), endpoint: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), subscription: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), dateCreated: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), dateUpdated: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
