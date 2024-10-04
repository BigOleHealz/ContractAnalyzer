/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPushNotificationsInputObjectSchema } from './UserUpdateWithoutPushNotificationsInput.schema';
import { UserUncheckedUpdateWithoutPushNotificationsInputObjectSchema } from './UserUncheckedUpdateWithoutPushNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPushNotificationsInput>;
export const UserUpdateToOneWithWhereWithoutPushNotificationsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutPushNotificationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPushNotificationsInputObjectSchema)])
}).strict() as SchemaType;
