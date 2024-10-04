/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutPushNotificationsInputObjectSchema } from './UserUpdateWithoutPushNotificationsInput.schema';
import { UserUncheckedUpdateWithoutPushNotificationsInputObjectSchema } from './UserUncheckedUpdateWithoutPushNotificationsInput.schema';
import { UserCreateWithoutPushNotificationsInputObjectSchema } from './UserCreateWithoutPushNotificationsInput.schema';
import { UserUncheckedCreateWithoutPushNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutPushNotificationsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutPushNotificationsInput>;
export const UserUpsertWithoutPushNotificationsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutPushNotificationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPushNotificationsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutPushNotificationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPushNotificationsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
