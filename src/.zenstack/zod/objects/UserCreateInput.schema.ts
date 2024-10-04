/* eslint-disable */
import { z } from 'zod';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { PushNotificationCreateNestedManyWithoutUserInputObjectSchema } from './PushNotificationCreateNestedManyWithoutUserInput.schema';
import { ContractCreateNestedManyWithoutUserInputObjectSchema } from './ContractCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), name: z.union([z.string(),
    z.null()]).optional().nullable(), email: z.union([z.string(),
    z.null()]).optional().nullable(), pictureUrl: z.union([z.string(),
    z.null()]).optional().nullable(), tokenInvitation: z.union([z.string(),
    z.null()]).optional().nullable(), emailVerified: z.union([z.boolean(),
    z.null()]).optional().nullable(), stripeCustomerId: z.union([z.string(),
    z.null()]).optional().nullable(), status: z.lazy(() => UserStatusSchema).optional(), globalRole: z.string().optional(), password: z.union([z.string(),
    z.null()]).optional().nullable(), dateCreated: z.union([z.date().optional(), z.string().datetime().optional()]), dateUpdated: z.union([z.date().optional(), z.string().datetime().optional()]), accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(), sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(), pushNotifications: z.lazy(() => PushNotificationCreateNestedManyWithoutUserInputObjectSchema).optional(), contracts: z.lazy(() => ContractCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict() as SchemaType;
