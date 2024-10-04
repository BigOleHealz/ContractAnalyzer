/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationCountAggregateInputType>;
export const PushNotificationCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), endpoint: z.literal(true).optional(), subscription: z.literal(true).optional(), dateCreated: z.literal(true).optional(), dateUpdated: z.literal(true).optional(), userId: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
