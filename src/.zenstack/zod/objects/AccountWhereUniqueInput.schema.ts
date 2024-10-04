/* eslint-disable */
import { z } from 'zod';
import { AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema } from './AccountProviderProviderAccountIdCompoundUniqueInput.schema';
import { AccountWhereInputObjectSchema } from './AccountWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountWhereUniqueInput>;
export const AccountWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema).optional(), AND: z.union([z.lazy(() => AccountWhereInputObjectSchema),
    z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => AccountWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => AccountWhereInputObjectSchema),
    z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(), userId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), type: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), provider: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), providerAccountId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), refresh_token: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), access_token: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), expires_at: z.union([z.lazy(() => IntNullableFilterObjectSchema),
    z.number(),
    z.null()]).optional().nullable(), token_type: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), scope: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), id_token: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), session_state: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), refresh_token_expires_in: z.union([z.lazy(() => IntNullableFilterObjectSchema),
    z.number(),
    z.null()]).optional().nullable(), user: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict() as SchemaType;
