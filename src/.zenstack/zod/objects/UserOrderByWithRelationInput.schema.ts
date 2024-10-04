/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { PushNotificationOrderByRelationAggregateInputObjectSchema } from './PushNotificationOrderByRelationAggregateInput.schema';
import { ContractOrderByRelationAggregateInputObjectSchema } from './ContractOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), name: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), email: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), pictureUrl: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), tokenInvitation: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), emailVerified: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), stripeCustomerId: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), status: z.lazy(() => SortOrderSchema).optional(), globalRole: z.lazy(() => SortOrderSchema).optional(), password: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), dateCreated: z.lazy(() => SortOrderSchema).optional(), dateUpdated: z.lazy(() => SortOrderSchema).optional(), accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(), sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(), pushNotifications: z.lazy(() => PushNotificationOrderByRelationAggregateInputObjectSchema).optional(), contracts: z.lazy(() => ContractOrderByRelationAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
