/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPushNotificationsInputObjectSchema } from './UserCreateWithoutPushNotificationsInput.schema';
import { UserUncheckedCreateWithoutPushNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutPushNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutPushNotificationsInput>;
export const UserCreateOrConnectWithoutPushNotificationsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutPushNotificationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPushNotificationsInputObjectSchema)])
}).strict() as SchemaType;
