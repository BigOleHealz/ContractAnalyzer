/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPushNotificationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPushNotificationsNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationUpdateInput>;
export const PushNotificationUpdateInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), endpoint: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), subscription: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), dateCreated: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), dateUpdated: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), user: z.lazy(() => UserUpdateOneRequiredWithoutPushNotificationsNestedInputObjectSchema).optional()
}).strict() as SchemaType;
