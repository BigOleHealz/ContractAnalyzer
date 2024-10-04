
/* eslint-disable */
import { z } from 'zod';
;
import type { Prisma } from '@prisma/client';

;
import { ClauseSelectObjectSchema } from '../objects/ClauseSelect.schema';
import { ClauseIncludeObjectSchema } from '../objects/ClauseInclude.schema';
import { ClauseWhereUniqueInputObjectSchema } from '../objects/ClauseWhereUniqueInput.schema';
import { ClauseWhereInputObjectSchema } from '../objects/ClauseWhereInput.schema';
import { ClauseOrderByWithRelationInputObjectSchema } from '../objects/ClauseOrderByWithRelationInput.schema';
import { ClauseScalarFieldEnumSchema } from '../enums/ClauseScalarFieldEnum.schema';
import { ClauseCreateInputObjectSchema } from '../objects/ClauseCreateInput.schema';
import { ClauseUncheckedCreateInputObjectSchema } from '../objects/ClauseUncheckedCreateInput.schema';
import { ClauseCreateManyInputObjectSchema } from '../objects/ClauseCreateManyInput.schema';
import { ClauseUpdateInputObjectSchema } from '../objects/ClauseUpdateInput.schema';
import { ClauseUncheckedUpdateInputObjectSchema } from '../objects/ClauseUncheckedUpdateInput.schema';
import { ClauseUpdateManyMutationInputObjectSchema } from '../objects/ClauseUpdateManyMutationInput.schema';
import { ClauseUncheckedUpdateManyInputObjectSchema } from '../objects/ClauseUncheckedUpdateManyInput.schema';
import { ClauseCountAggregateInputObjectSchema } from '../objects/ClauseCountAggregateInput.schema';
import { ClauseMinAggregateInputObjectSchema } from '../objects/ClauseMinAggregateInput.schema';
import { ClauseMaxAggregateInputObjectSchema } from '../objects/ClauseMaxAggregateInput.schema';
import { ClauseOrderByWithAggregationInputObjectSchema } from '../objects/ClauseOrderByWithAggregationInput.schema';
import { ClauseScalarWhereWithAggregatesInputObjectSchema } from '../objects/ClauseScalarWhereWithAggregatesInput.schema'

type ClauseInputSchemaType = {
    findUnique: z.ZodType<Prisma.ClauseFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.ClauseFindFirstArgs>,
    findMany: z.ZodType<Prisma.ClauseFindManyArgs>,
    create: z.ZodType<Prisma.ClauseCreateArgs>,
    createMany: z.ZodType<Prisma.ClauseCreateManyArgs>,
    delete: z.ZodType<Prisma.ClauseDeleteArgs>,
    deleteMany: z.ZodType<Prisma.ClauseDeleteManyArgs>,
    update: z.ZodType<Prisma.ClauseUpdateArgs>,
    updateMany: z.ZodType<Prisma.ClauseUpdateManyArgs>,
    upsert: z.ZodType<Prisma.ClauseUpsertArgs>,
    aggregate: z.ZodType<Prisma.ClauseAggregateArgs>,
    groupBy: z.ZodType<Prisma.ClauseGroupByArgs>,
    count: z.ZodType<Prisma.ClauseCountArgs>
}

export const ClauseInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => ClauseSelectObjectSchema.optional()), include: z.lazy(() => ClauseIncludeObjectSchema.optional()), where: ClauseWhereUniqueInputObjectSchema
    }).strict(), findFirst: z.object({
        select: z.lazy(() => ClauseSelectObjectSchema.optional()), include: z.lazy(() => ClauseIncludeObjectSchema.optional()), where: ClauseWhereInputObjectSchema.optional(), orderBy: z.union([ClauseOrderByWithRelationInputObjectSchema, ClauseOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ClauseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ClauseScalarFieldEnumSchema).optional()
    }).strict(), findMany: z.object({
        select: z.lazy(() => ClauseSelectObjectSchema.optional()), include: z.lazy(() => ClauseIncludeObjectSchema.optional()), where: ClauseWhereInputObjectSchema.optional(), orderBy: z.union([ClauseOrderByWithRelationInputObjectSchema, ClauseOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ClauseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ClauseScalarFieldEnumSchema).optional()
    }).strict(), create: z.object({
        select: z.lazy(() => ClauseSelectObjectSchema.optional()), include: z.lazy(() => ClauseIncludeObjectSchema.optional()), data: z.union([ClauseCreateInputObjectSchema, ClauseUncheckedCreateInputObjectSchema])
    }).strict(), createMany: z.object({
        data: z.union([ClauseCreateManyInputObjectSchema, z.array(ClauseCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional()
    }).strict(), 'delete': z.object({
        select: z.lazy(() => ClauseSelectObjectSchema.optional()), include: z.lazy(() => ClauseIncludeObjectSchema.optional()), where: ClauseWhereUniqueInputObjectSchema
    }).strict(), deleteMany: z.object({
        where: ClauseWhereInputObjectSchema.optional()
    }).strict(), update: z.object({
        select: z.lazy(() => ClauseSelectObjectSchema.optional()), include: z.lazy(() => ClauseIncludeObjectSchema.optional()), data: z.union([ClauseUpdateInputObjectSchema, ClauseUncheckedUpdateInputObjectSchema]), where: ClauseWhereUniqueInputObjectSchema
    }).strict(), updateMany: z.object({
        data: z.union([ClauseUpdateManyMutationInputObjectSchema, ClauseUncheckedUpdateManyInputObjectSchema]), where: ClauseWhereInputObjectSchema.optional()
    }).strict(), upsert: z.object({
        select: z.lazy(() => ClauseSelectObjectSchema.optional()), include: z.lazy(() => ClauseIncludeObjectSchema.optional()), where: ClauseWhereUniqueInputObjectSchema, create: z.union([ClauseCreateInputObjectSchema, ClauseUncheckedCreateInputObjectSchema]), update: z.union([ClauseUpdateInputObjectSchema, ClauseUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: z.object({
        where: ClauseWhereInputObjectSchema.optional(), orderBy: z.union([ClauseOrderByWithRelationInputObjectSchema, ClauseOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ClauseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), ClauseCountAggregateInputObjectSchema]).optional(), _min: ClauseMinAggregateInputObjectSchema.optional(), _max: ClauseMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: z.object({
        where: ClauseWhereInputObjectSchema.optional(), orderBy: z.union([ClauseOrderByWithAggregationInputObjectSchema, ClauseOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ClauseScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ClauseScalarFieldEnumSchema), _count: z.union([z.literal(true), ClauseCountAggregateInputObjectSchema]).optional(), _min: ClauseMinAggregateInputObjectSchema.optional(), _max: ClauseMaxAggregateInputObjectSchema.optional()
    }).strict(), count: z.object({
        where: ClauseWhereInputObjectSchema.optional(), orderBy: z.union([ClauseOrderByWithRelationInputObjectSchema, ClauseOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ClauseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ClauseScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), ClauseCountAggregateInputObjectSchema]).optional()
    }).strict(),
} as ClauseInputSchemaType;
