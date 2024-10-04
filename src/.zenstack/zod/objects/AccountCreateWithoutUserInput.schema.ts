/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountCreateWithoutUserInput>;
export const AccountCreateWithoutUserInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), type: z.string(), provider: z.string(), providerAccountId: z.string(), refresh_token: z.union([z.string(),
    z.null()]).optional().nullable(), access_token: z.union([z.string(),
    z.null()]).optional().nullable(), expires_at: z.union([z.number(),
    z.null()]).optional().nullable(), token_type: z.union([z.string(),
    z.null()]).optional().nullable(), scope: z.union([z.string(),
    z.null()]).optional().nullable(), id_token: z.union([z.string(),
    z.null()]).optional().nullable(), session_state: z.union([z.string(),
    z.null()]).optional().nullable(), refresh_token_expires_in: z.union([z.number(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
