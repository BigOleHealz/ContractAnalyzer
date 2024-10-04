/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserMinAggregateInputType>;
export const UserMinAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), name: z.literal(true).optional(), email: z.literal(true).optional(), pictureUrl: z.literal(true).optional(), tokenInvitation: z.literal(true).optional(), emailVerified: z.literal(true).optional(), stripeCustomerId: z.literal(true).optional(), status: z.literal(true).optional(), globalRole: z.literal(true).optional(), password: z.literal(true).optional(), dateCreated: z.literal(true).optional(), dateUpdated: z.literal(true).optional()
}).strict() as SchemaType;
