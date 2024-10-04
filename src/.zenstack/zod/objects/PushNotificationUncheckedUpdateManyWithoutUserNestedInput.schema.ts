/* eslint-disable */
import { z } from 'zod';
import { PushNotificationCreateWithoutUserInputObjectSchema } from './PushNotificationCreateWithoutUserInput.schema';
import { PushNotificationUncheckedCreateWithoutUserInputObjectSchema } from './PushNotificationUncheckedCreateWithoutUserInput.schema';
import { PushNotificationCreateOrConnectWithoutUserInputObjectSchema } from './PushNotificationCreateOrConnectWithoutUserInput.schema';
import { PushNotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PushNotificationUpsertWithWhereUniqueWithoutUserInput.schema';
import { PushNotificationCreateManyUserInputEnvelopeObjectSchema } from './PushNotificationCreateManyUserInputEnvelope.schema';
import { PushNotificationWhereUniqueInputObjectSchema } from './PushNotificationWhereUniqueInput.schema';
import { PushNotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PushNotificationUpdateWithWhereUniqueWithoutUserInput.schema';
import { PushNotificationUpdateManyWithWhereWithoutUserInputObjectSchema } from './PushNotificationUpdateManyWithWhereWithoutUserInput.schema';
import { PushNotificationScalarWhereInputObjectSchema } from './PushNotificationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationUncheckedUpdateManyWithoutUserNestedInput>;
export const PushNotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PushNotificationCreateWithoutUserInputObjectSchema), z.lazy(() => PushNotificationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PushNotificationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PushNotificationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PushNotificationCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => PushNotificationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => PushNotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema),
    z.lazy(() => PushNotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PushNotificationCreateManyUserInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => PushNotificationWhereUniqueInputObjectSchema),
    z.lazy(() => PushNotificationWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => PushNotificationWhereUniqueInputObjectSchema),
    z.lazy(() => PushNotificationWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => PushNotificationWhereUniqueInputObjectSchema),
    z.lazy(() => PushNotificationWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => PushNotificationWhereUniqueInputObjectSchema),
    z.lazy(() => PushNotificationWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => PushNotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema),
    z.lazy(() => PushNotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => PushNotificationUpdateManyWithWhereWithoutUserInputObjectSchema),
    z.lazy(() => PushNotificationUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => PushNotificationScalarWhereInputObjectSchema),
    z.lazy(() => PushNotificationScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
