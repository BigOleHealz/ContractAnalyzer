/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutPushNotificationsInputObjectSchema } from './UserCreateWithoutPushNotificationsInput.schema';
import { UserUncheckedCreateWithoutPushNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutPushNotificationsInput.schema';
import { UserCreateOrConnectWithoutPushNotificationsInputObjectSchema } from './UserCreateOrConnectWithoutPushNotificationsInput.schema';
import { UserUpsertWithoutPushNotificationsInputObjectSchema } from './UserUpsertWithoutPushNotificationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPushNotificationsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPushNotificationsInput.schema';
import { UserUpdateWithoutPushNotificationsInputObjectSchema } from './UserUpdateWithoutPushNotificationsInput.schema';
import { UserUncheckedUpdateWithoutPushNotificationsInputObjectSchema } from './UserUncheckedUpdateWithoutPushNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutPushNotificationsNestedInput>;
export const UserUpdateOneRequiredWithoutPushNotificationsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutPushNotificationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPushNotificationsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPushNotificationsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutPushNotificationsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPushNotificationsInputObjectSchema), z.lazy(() => UserUpdateWithoutPushNotificationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPushNotificationsInputObjectSchema)]).optional()
}).strict() as SchemaType;
