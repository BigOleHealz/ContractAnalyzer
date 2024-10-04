/* eslint-disable */
import { z } from 'zod';
import { AccountInputSchema } from '../input/AccountInput.schema';
import { SessionInputSchema } from '../input/SessionInput.schema';
import { PushNotificationInputSchema } from '../input/PushNotificationInput.schema';
import { ContractInputSchema } from '../input/ContractInput.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), name: z.boolean().optional(), email: z.boolean().optional(), pictureUrl: z.boolean().optional(), tokenInvitation: z.boolean().optional(), emailVerified: z.boolean().optional(), stripeCustomerId: z.boolean().optional(), status: z.boolean().optional(), globalRole: z.boolean().optional(), password: z.boolean().optional(), dateCreated: z.boolean().optional(), dateUpdated: z.boolean().optional(), accounts: z.union([z.boolean(),
    z.lazy(() => AccountInputSchema.findMany)]).optional(), sessions: z.union([z.boolean(),
    z.lazy(() => SessionInputSchema.findMany)]).optional(), pushNotifications: z.union([z.boolean(),
    z.lazy(() => PushNotificationInputSchema.findMany)]).optional(), contracts: z.union([z.boolean(),
    z.lazy(() => ContractInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
