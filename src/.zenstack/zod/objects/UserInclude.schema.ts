/* eslint-disable */
import { z } from 'zod';
import { AccountInputSchema } from '../input/AccountInput.schema';
import { SessionInputSchema } from '../input/SessionInput.schema';
import { PushNotificationInputSchema } from '../input/PushNotificationInput.schema';
import { ContractInputSchema } from '../input/ContractInput.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectSchema: SchemaType = z.object({
    accounts: z.union([z.boolean(),
    z.lazy(() => AccountInputSchema.findMany)]).optional(), sessions: z.union([z.boolean(),
    z.lazy(() => SessionInputSchema.findMany)]).optional(), pushNotifications: z.union([z.boolean(),
    z.lazy(() => PushNotificationInputSchema.findMany)]).optional(), contracts: z.union([z.boolean(),
    z.lazy(() => ContractInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
