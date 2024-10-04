/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutPushNotificationsInputObjectSchema } from './UserCreateWithoutPushNotificationsInput.schema';
import { UserUncheckedCreateWithoutPushNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutPushNotificationsInput.schema';
import { UserCreateOrConnectWithoutPushNotificationsInputObjectSchema } from './UserCreateOrConnectWithoutPushNotificationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutPushNotificationsInput>;
export const UserCreateNestedOneWithoutPushNotificationsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutPushNotificationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPushNotificationsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPushNotificationsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
