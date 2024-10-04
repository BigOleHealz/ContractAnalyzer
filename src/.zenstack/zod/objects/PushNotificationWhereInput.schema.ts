/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationWhereInput>;
export const PushNotificationWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => PushNotificationWhereInputObjectSchema),
    z.lazy(() => PushNotificationWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => PushNotificationWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => PushNotificationWhereInputObjectSchema),
    z.lazy(() => PushNotificationWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), endpoint: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), subscription: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), dateCreated: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), dateUpdated: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), userId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), user: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict() as SchemaType;
