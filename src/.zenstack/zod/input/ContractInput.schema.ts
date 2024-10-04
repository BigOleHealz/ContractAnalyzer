
/* eslint-disable */
import { z } from 'zod';
;
import type { Prisma } from '@prisma/client';

;
import { ContractSelectObjectSchema } from '../objects/ContractSelect.schema';
import { ContractIncludeObjectSchema } from '../objects/ContractInclude.schema';
import { ContractWhereUniqueInputObjectSchema } from '../objects/ContractWhereUniqueInput.schema';
import { ContractWhereInputObjectSchema } from '../objects/ContractWhereInput.schema';
import { ContractOrderByWithRelationInputObjectSchema } from '../objects/ContractOrderByWithRelationInput.schema';
import { ContractScalarFieldEnumSchema } from '../enums/ContractScalarFieldEnum.schema';
import { ContractCreateInputObjectSchema } from '../objects/ContractCreateInput.schema';
import { ContractUncheckedCreateInputObjectSchema } from '../objects/ContractUncheckedCreateInput.schema';
import { ContractCreateManyInputObjectSchema } from '../objects/ContractCreateManyInput.schema';
import { ContractUpdateInputObjectSchema } from '../objects/ContractUpdateInput.schema';
import { ContractUncheckedUpdateInputObjectSchema } from '../objects/ContractUncheckedUpdateInput.schema';
import { ContractUpdateManyMutationInputObjectSchema } from '../objects/ContractUpdateManyMutationInput.schema';
import { ContractUncheckedUpdateManyInputObjectSchema } from '../objects/ContractUncheckedUpdateManyInput.schema';
import { ContractCountAggregateInputObjectSchema } from '../objects/ContractCountAggregateInput.schema';
import { ContractMinAggregateInputObjectSchema } from '../objects/ContractMinAggregateInput.schema';
import { ContractMaxAggregateInputObjectSchema } from '../objects/ContractMaxAggregateInput.schema';
import { ContractOrderByWithAggregationInputObjectSchema } from '../objects/ContractOrderByWithAggregationInput.schema';
import { ContractScalarWhereWithAggregatesInputObjectSchema } from '../objects/ContractScalarWhereWithAggregatesInput.schema'

type ContractInputSchemaType = {
    findUnique: z.ZodType<Prisma.ContractFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.ContractFindFirstArgs>,
    findMany: z.ZodType<Prisma.ContractFindManyArgs>,
    create: z.ZodType<Prisma.ContractCreateArgs>,
    createMany: z.ZodType<Prisma.ContractCreateManyArgs>,
    delete: z.ZodType<Prisma.ContractDeleteArgs>,
    deleteMany: z.ZodType<Prisma.ContractDeleteManyArgs>,
    update: z.ZodType<Prisma.ContractUpdateArgs>,
    updateMany: z.ZodType<Prisma.ContractUpdateManyArgs>,
    upsert: z.ZodType<Prisma.ContractUpsertArgs>,
    aggregate: z.ZodType<Prisma.ContractAggregateArgs>,
    groupBy: z.ZodType<Prisma.ContractGroupByArgs>,
    count: z.ZodType<Prisma.ContractCountArgs>
}

export const ContractInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => ContractSelectObjectSchema.optional()), include: z.lazy(() => ContractIncludeObjectSchema.optional()), where: ContractWhereUniqueInputObjectSchema
    }).strict(), findFirst: z.object({
        select: z.lazy(() => ContractSelectObjectSchema.optional()), include: z.lazy(() => ContractIncludeObjectSchema.optional()), where: ContractWhereInputObjectSchema.optional(), orderBy: z.union([ContractOrderByWithRelationInputObjectSchema, ContractOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ContractWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ContractScalarFieldEnumSchema).optional()
    }).strict(), findMany: z.object({
        select: z.lazy(() => ContractSelectObjectSchema.optional()), include: z.lazy(() => ContractIncludeObjectSchema.optional()), where: ContractWhereInputObjectSchema.optional(), orderBy: z.union([ContractOrderByWithRelationInputObjectSchema, ContractOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ContractWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ContractScalarFieldEnumSchema).optional()
    }).strict(), create: z.object({
        select: z.lazy(() => ContractSelectObjectSchema.optional()), include: z.lazy(() => ContractIncludeObjectSchema.optional()), data: z.union([ContractCreateInputObjectSchema, ContractUncheckedCreateInputObjectSchema])
    }).strict(), createMany: z.object({
        data: z.union([ContractCreateManyInputObjectSchema, z.array(ContractCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional()
    }).strict(), 'delete': z.object({
        select: z.lazy(() => ContractSelectObjectSchema.optional()), include: z.lazy(() => ContractIncludeObjectSchema.optional()), where: ContractWhereUniqueInputObjectSchema
    }).strict(), deleteMany: z.object({
        where: ContractWhereInputObjectSchema.optional()
    }).strict(), update: z.object({
        select: z.lazy(() => ContractSelectObjectSchema.optional()), include: z.lazy(() => ContractIncludeObjectSchema.optional()), data: z.union([ContractUpdateInputObjectSchema, ContractUncheckedUpdateInputObjectSchema]), where: ContractWhereUniqueInputObjectSchema
    }).strict(), updateMany: z.object({
        data: z.union([ContractUpdateManyMutationInputObjectSchema, ContractUncheckedUpdateManyInputObjectSchema]), where: ContractWhereInputObjectSchema.optional()
    }).strict(), upsert: z.object({
        select: z.lazy(() => ContractSelectObjectSchema.optional()), include: z.lazy(() => ContractIncludeObjectSchema.optional()), where: ContractWhereUniqueInputObjectSchema, create: z.union([ContractCreateInputObjectSchema, ContractUncheckedCreateInputObjectSchema]), update: z.union([ContractUpdateInputObjectSchema, ContractUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: z.object({
        where: ContractWhereInputObjectSchema.optional(), orderBy: z.union([ContractOrderByWithRelationInputObjectSchema, ContractOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ContractWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), ContractCountAggregateInputObjectSchema]).optional(), _min: ContractMinAggregateInputObjectSchema.optional(), _max: ContractMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: z.object({
        where: ContractWhereInputObjectSchema.optional(), orderBy: z.union([ContractOrderByWithAggregationInputObjectSchema, ContractOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ContractScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ContractScalarFieldEnumSchema), _count: z.union([z.literal(true), ContractCountAggregateInputObjectSchema]).optional(), _min: ContractMinAggregateInputObjectSchema.optional(), _max: ContractMaxAggregateInputObjectSchema.optional()
    }).strict(), count: z.object({
        where: ContractWhereInputObjectSchema.optional(), orderBy: z.union([ContractOrderByWithRelationInputObjectSchema, ContractOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ContractWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ContractScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), ContractCountAggregateInputObjectSchema]).optional()
    }).strict(),
} as ContractInputSchemaType;
