/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationUncheckedCreateInput>;
export const PushNotificationUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), endpoint: z.string(), subscription: z.string(), dateCreated: z.union([z.date().optional(), z.string().datetime().optional()]), dateUpdated: z.union([z.date().optional(), z.string().datetime().optional()]), userId: z.string()
}).strict() as SchemaType;
