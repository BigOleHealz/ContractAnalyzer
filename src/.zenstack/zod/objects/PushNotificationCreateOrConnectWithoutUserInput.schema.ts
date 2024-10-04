/* eslint-disable */
import { z } from 'zod';
import { PushNotificationWhereUniqueInputObjectSchema } from './PushNotificationWhereUniqueInput.schema';
import { PushNotificationCreateWithoutUserInputObjectSchema } from './PushNotificationCreateWithoutUserInput.schema';
import { PushNotificationUncheckedCreateWithoutUserInputObjectSchema } from './PushNotificationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationCreateOrConnectWithoutUserInput>;
export const PushNotificationCreateOrConnectWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PushNotificationWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => PushNotificationCreateWithoutUserInputObjectSchema), z.lazy(() => PushNotificationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
