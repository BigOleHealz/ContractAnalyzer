/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { EnumUserStatusFilterObjectSchema } from './EnumUserStatusFilter.schema';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { PushNotificationListRelationFilterObjectSchema } from './PushNotificationListRelationFilter.schema';
import { ContractListRelationFilterObjectSchema } from './ContractListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserWhereUniqueInput>;
export const UserWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), email: z.string().optional(), AND: z.union([z.lazy(() => UserWhereInputObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => UserWhereInputObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema).array()]).optional(), name: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), pictureUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), tokenInvitation: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), emailVerified: z.union([z.lazy(() => BoolNullableFilterObjectSchema),
    z.boolean(),
    z.null()]).optional().nullable(), stripeCustomerId: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => EnumUserStatusFilterObjectSchema),
    z.lazy(() => UserStatusSchema)]).optional(), globalRole: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), password: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), dateCreated: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), dateUpdated: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(), sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(), pushNotifications: z.lazy(() => PushNotificationListRelationFilterObjectSchema).optional(), contracts: z.lazy(() => ContractListRelationFilterObjectSchema).optional()
}).strict() as SchemaType;
