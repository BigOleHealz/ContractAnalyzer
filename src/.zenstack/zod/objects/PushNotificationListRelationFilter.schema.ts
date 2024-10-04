/* eslint-disable */
import { z } from 'zod';
import { PushNotificationWhereInputObjectSchema } from './PushNotificationWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationListRelationFilter>;
export const PushNotificationListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => PushNotificationWhereInputObjectSchema).optional(), some: z.lazy(() => PushNotificationWhereInputObjectSchema).optional(), none: z.lazy(() => PushNotificationWhereInputObjectSchema).optional()
}).strict() as SchemaType;
