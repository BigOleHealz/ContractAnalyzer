/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationSelect>;
export const PushNotificationSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), endpoint: z.boolean().optional(), subscription: z.boolean().optional(), dateCreated: z.boolean().optional(), dateUpdated: z.boolean().optional(), userId: z.boolean().optional(), user: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict() as SchemaType;
