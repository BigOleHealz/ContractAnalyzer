/* eslint-disable */
import { z } from 'zod';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { PushNotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PushNotificationUncheckedCreateNestedManyWithoutUserInput.schema';
import { ContractUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ContractUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput>;
export const UserUncheckedCreateWithoutAccountsInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), name: z.union([z.string(),
    z.null()]).optional().nullable(), email: z.union([z.string(),
    z.null()]).optional().nullable(), pictureUrl: z.union([z.string(),
    z.null()]).optional().nullable(), tokenInvitation: z.union([z.string(),
    z.null()]).optional().nullable(), emailVerified: z.union([z.boolean(),
    z.null()]).optional().nullable(), stripeCustomerId: z.union([z.string(),
    z.null()]).optional().nullable(), status: z.lazy(() => UserStatusSchema).optional(), globalRole: z.string().optional(), password: z.union([z.string(),
    z.null()]).optional().nullable(), dateCreated: z.union([z.date().optional(), z.string().datetime().optional()]), dateUpdated: z.union([z.date().optional(), z.string().datetime().optional()]), sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(), pushNotifications: z.lazy(() => PushNotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(), contracts: z.lazy(() => ContractUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict() as SchemaType;
