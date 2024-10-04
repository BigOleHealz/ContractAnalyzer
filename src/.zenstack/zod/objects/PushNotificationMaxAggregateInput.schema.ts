/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationMaxAggregateInputType>;
export const PushNotificationMaxAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), endpoint: z.literal(true).optional(), subscription: z.literal(true).optional(), dateCreated: z.literal(true).optional(), dateUpdated: z.literal(true).optional(), userId: z.literal(true).optional()
}).strict() as SchemaType;
