/* eslint-disable */
import { z } from 'zod';
import { PushNotificationCreateManyUserInputObjectSchema } from './PushNotificationCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationCreateManyUserInputEnvelope>;
export const PushNotificationCreateManyUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => PushNotificationCreateManyUserInputObjectSchema),
    z.lazy(() => PushNotificationCreateManyUserInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
