/* eslint-disable */
import { z } from 'zod';
import { PushNotificationWhereUniqueInputObjectSchema } from './PushNotificationWhereUniqueInput.schema';
import { PushNotificationUpdateWithoutUserInputObjectSchema } from './PushNotificationUpdateWithoutUserInput.schema';
import { PushNotificationUncheckedUpdateWithoutUserInputObjectSchema } from './PushNotificationUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationUpdateWithWhereUniqueWithoutUserInput>;
export const PushNotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PushNotificationWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => PushNotificationUpdateWithoutUserInputObjectSchema), z.lazy(() => PushNotificationUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
