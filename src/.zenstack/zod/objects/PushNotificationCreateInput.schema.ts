/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutPushNotificationsInputObjectSchema } from './UserCreateNestedOneWithoutPushNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationCreateInput>;
export const PushNotificationCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), endpoint: z.string(), subscription: z.string(), dateCreated: z.union([z.date().optional(), z.string().datetime().optional()]), dateUpdated: z.union([z.date().optional(), z.string().datetime().optional()]), user: z.lazy(() => UserCreateNestedOneWithoutPushNotificationsInputObjectSchema)
}).strict() as SchemaType;
