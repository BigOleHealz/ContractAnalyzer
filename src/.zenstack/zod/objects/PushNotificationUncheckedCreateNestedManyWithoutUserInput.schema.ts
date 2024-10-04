/* eslint-disable */
import { z } from 'zod';
import { PushNotificationCreateWithoutUserInputObjectSchema } from './PushNotificationCreateWithoutUserInput.schema';
import { PushNotificationUncheckedCreateWithoutUserInputObjectSchema } from './PushNotificationUncheckedCreateWithoutUserInput.schema';
import { PushNotificationCreateOrConnectWithoutUserInputObjectSchema } from './PushNotificationCreateOrConnectWithoutUserInput.schema';
import { PushNotificationCreateManyUserInputEnvelopeObjectSchema } from './PushNotificationCreateManyUserInputEnvelope.schema';
import { PushNotificationWhereUniqueInputObjectSchema } from './PushNotificationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationUncheckedCreateNestedManyWithoutUserInput>;
export const PushNotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PushNotificationCreateWithoutUserInputObjectSchema), z.lazy(() => PushNotificationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PushNotificationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PushNotificationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PushNotificationCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => PushNotificationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PushNotificationCreateManyUserInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => PushNotificationWhereUniqueInputObjectSchema),
    z.lazy(() => PushNotificationWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
