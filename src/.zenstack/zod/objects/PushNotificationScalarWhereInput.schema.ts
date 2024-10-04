/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationScalarWhereInput>;
export const PushNotificationScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => PushNotificationScalarWhereInputObjectSchema),
    z.lazy(() => PushNotificationScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => PushNotificationScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => PushNotificationScalarWhereInputObjectSchema),
    z.lazy(() => PushNotificationScalarWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), endpoint: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), subscription: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), dateCreated: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), dateUpdated: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), userId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
