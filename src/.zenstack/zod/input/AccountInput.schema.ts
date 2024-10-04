
/* eslint-disable */
import { z } from 'zod';
;
import type { Prisma } from '@prisma/client';

;
import { AccountSelectObjectSchema } from '../objects/AccountSelect.schema';
import { AccountIncludeObjectSchema } from '../objects/AccountInclude.schema';
import { AccountWhereUniqueInputObjectSchema } from '../objects/AccountWhereUniqueInput.schema';
import { AccountWhereInputObjectSchema } from '../objects/AccountWhereInput.schema';
import { AccountOrderByWithRelationInputObjectSchema } from '../objects/AccountOrderByWithRelationInput.schema';
import { AccountScalarFieldEnumSchema } from '../enums/AccountScalarFieldEnum.schema';
import { AccountCreateInputObjectSchema } from '../objects/AccountCreateInput.schema';
import { AccountUncheckedCreateInputObjectSchema } from '../objects/AccountUncheckedCreateInput.schema';
import { AccountCreateManyInputObjectSchema } from '../objects/AccountCreateManyInput.schema';
import { AccountUpdateInputObjectSchema } from '../objects/AccountUpdateInput.schema';
import { AccountUncheckedUpdateInputObjectSchema } from '../objects/AccountUncheckedUpdateInput.schema';
import { AccountUpdateManyMutationInputObjectSchema } from '../objects/AccountUpdateManyMutationInput.schema';
import { AccountUncheckedUpdateManyInputObjectSchema } from '../objects/AccountUncheckedUpdateManyInput.schema';
import { AccountCountAggregateInputObjectSchema } from '../objects/AccountCountAggregateInput.schema';
import { AccountMinAggregateInputObjectSchema } from '../objects/AccountMinAggregateInput.schema';
import { AccountMaxAggregateInputObjectSchema } from '../objects/AccountMaxAggregateInput.schema';
import { AccountAvgAggregateInputObjectSchema } from '../objects/AccountAvgAggregateInput.schema';
import { AccountSumAggregateInputObjectSchema } from '../objects/AccountSumAggregateInput.schema';
import { AccountOrderByWithAggregationInputObjectSchema } from '../objects/AccountOrderByWithAggregationInput.schema';
import { AccountScalarWhereWithAggregatesInputObjectSchema } from '../objects/AccountScalarWhereWithAggregatesInput.schema'

type AccountInputSchemaType = {
    findUnique: z.ZodType<Prisma.AccountFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.AccountFindFirstArgs>,
    findMany: z.ZodType<Prisma.AccountFindManyArgs>,
    create: z.ZodType<Prisma.AccountCreateArgs>,
    createMany: z.ZodType<Prisma.AccountCreateManyArgs>,
    delete: z.ZodType<Prisma.AccountDeleteArgs>,
    deleteMany: z.ZodType<Prisma.AccountDeleteManyArgs>,
    update: z.ZodType<Prisma.AccountUpdateArgs>,
    updateMany: z.ZodType<Prisma.AccountUpdateManyArgs>,
    upsert: z.ZodType<Prisma.AccountUpsertArgs>,
    aggregate: z.ZodType<Prisma.AccountAggregateArgs>,
    groupBy: z.ZodType<Prisma.AccountGroupByArgs>,
    count: z.ZodType<Prisma.AccountCountArgs>
}

export const AccountInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => AccountSelectObjectSchema.optional()), include: z.lazy(() => AccountIncludeObjectSchema.optional()), where: AccountWhereUniqueInputObjectSchema
    }).strict(), findFirst: z.object({
        select: z.lazy(() => AccountSelectObjectSchema.optional()), include: z.lazy(() => AccountIncludeObjectSchema.optional()), where: AccountWhereInputObjectSchema.optional(), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(AccountScalarFieldEnumSchema).optional()
    }).strict(), findMany: z.object({
        select: z.lazy(() => AccountSelectObjectSchema.optional()), include: z.lazy(() => AccountIncludeObjectSchema.optional()), where: AccountWhereInputObjectSchema.optional(), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(AccountScalarFieldEnumSchema).optional()
    }).strict(), create: z.object({
        select: z.lazy(() => AccountSelectObjectSchema.optional()), include: z.lazy(() => AccountIncludeObjectSchema.optional()), data: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema])
    }).strict(), createMany: z.object({
        data: z.union([AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional()
    }).strict(), 'delete': z.object({
        select: z.lazy(() => AccountSelectObjectSchema.optional()), include: z.lazy(() => AccountIncludeObjectSchema.optional()), where: AccountWhereUniqueInputObjectSchema
    }).strict(), deleteMany: z.object({
        where: AccountWhereInputObjectSchema.optional()
    }).strict(), update: z.object({
        select: z.lazy(() => AccountSelectObjectSchema.optional()), include: z.lazy(() => AccountIncludeObjectSchema.optional()), data: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]), where: AccountWhereUniqueInputObjectSchema
    }).strict(), updateMany: z.object({
        data: z.union([AccountUpdateManyMutationInputObjectSchema, AccountUncheckedUpdateManyInputObjectSchema]), where: AccountWhereInputObjectSchema.optional()
    }).strict(), upsert: z.object({
        select: z.lazy(() => AccountSelectObjectSchema.optional()), include: z.lazy(() => AccountIncludeObjectSchema.optional()), where: AccountWhereUniqueInputObjectSchema, create: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]), update: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: z.object({
        where: AccountWhereInputObjectSchema.optional(), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), AccountCountAggregateInputObjectSchema]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional(), _avg: AccountAvgAggregateInputObjectSchema.optional(), _sum: AccountSumAggregateInputObjectSchema.optional()
    }).strict(), groupBy: z.object({
        where: AccountWhereInputObjectSchema.optional(), orderBy: z.union([AccountOrderByWithAggregationInputObjectSchema, AccountOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AccountScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AccountScalarFieldEnumSchema), _count: z.union([z.literal(true), AccountCountAggregateInputObjectSchema]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional(), _avg: AccountAvgAggregateInputObjectSchema.optional(), _sum: AccountSumAggregateInputObjectSchema.optional()
    }).strict(), count: z.object({
        where: AccountWhereInputObjectSchema.optional(), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(AccountScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), AccountCountAggregateInputObjectSchema]).optional()
    }).strict(),
} as AccountInputSchemaType;
