/* eslint-disable */
import { z } from 'zod';
import { PushNotificationWhereUniqueInputObjectSchema } from './PushNotificationWhereUniqueInput.schema';
import { PushNotificationUpdateWithoutUserInputObjectSchema } from './PushNotificationUpdateWithoutUserInput.schema';
import { PushNotificationUncheckedUpdateWithoutUserInputObjectSchema } from './PushNotificationUncheckedUpdateWithoutUserInput.schema';
import { PushNotificationCreateWithoutUserInputObjectSchema } from './PushNotificationCreateWithoutUserInput.schema';
import { PushNotificationUncheckedCreateWithoutUserInputObjectSchema } from './PushNotificationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationUpsertWithWhereUniqueWithoutUserInput>;
export const PushNotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PushNotificationWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => PushNotificationUpdateWithoutUserInputObjectSchema), z.lazy(() => PushNotificationUncheckedUpdateWithoutUserInputObjectSchema)]), create: z.union([z.lazy(() => PushNotificationCreateWithoutUserInputObjectSchema), z.lazy(() => PushNotificationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
