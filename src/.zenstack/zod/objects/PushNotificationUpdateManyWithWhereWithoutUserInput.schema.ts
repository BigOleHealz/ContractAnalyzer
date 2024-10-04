/* eslint-disable */
import { z } from 'zod';
import { PushNotificationScalarWhereInputObjectSchema } from './PushNotificationScalarWhereInput.schema';
import { PushNotificationUpdateManyMutationInputObjectSchema } from './PushNotificationUpdateManyMutationInput.schema';
import { PushNotificationUncheckedUpdateManyWithoutUserInputObjectSchema } from './PushNotificationUncheckedUpdateManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationUpdateManyWithWhereWithoutUserInput>;
export const PushNotificationUpdateManyWithWhereWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PushNotificationScalarWhereInputObjectSchema), data: z.union([z.lazy(() => PushNotificationUpdateManyMutationInputObjectSchema), z.lazy(() => PushNotificationUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
