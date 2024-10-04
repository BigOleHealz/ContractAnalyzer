
/* eslint-disable */
import { z } from 'zod';
;
import type { Prisma } from '@prisma/client';

;
import { PushNotificationSelectObjectSchema } from '../objects/PushNotificationSelect.schema';
import { PushNotificationIncludeObjectSchema } from '../objects/PushNotificationInclude.schema';
import { PushNotificationWhereUniqueInputObjectSchema } from '../objects/PushNotificationWhereUniqueInput.schema';
import { PushNotificationWhereInputObjectSchema } from '../objects/PushNotificationWhereInput.schema';
import { PushNotificationOrderByWithRelationInputObjectSchema } from '../objects/PushNotificationOrderByWithRelationInput.schema';
import { PushNotificationScalarFieldEnumSchema } from '../enums/PushNotificationScalarFieldEnum.schema';
import { PushNotificationCreateInputObjectSchema } from '../objects/PushNotificationCreateInput.schema';
import { PushNotificationUncheckedCreateInputObjectSchema } from '../objects/PushNotificationUncheckedCreateInput.schema';
import { PushNotificationCreateManyInputObjectSchema } from '../objects/PushNotificationCreateManyInput.schema';
import { PushNotificationUpdateInputObjectSchema } from '../objects/PushNotificationUpdateInput.schema';
import { PushNotificationUncheckedUpdateInputObjectSchema } from '../objects/PushNotificationUncheckedUpdateInput.schema';
import { PushNotificationUpdateManyMutationInputObjectSchema } from '../objects/PushNotificationUpdateManyMutationInput.schema';
import { PushNotificationUncheckedUpdateManyInputObjectSchema } from '../objects/PushNotificationUncheckedUpdateManyInput.schema';
import { PushNotificationCountAggregateInputObjectSchema } from '../objects/PushNotificationCountAggregateInput.schema';
import { PushNotificationMinAggregateInputObjectSchema } from '../objects/PushNotificationMinAggregateInput.schema';
import { PushNotificationMaxAggregateInputObjectSchema } from '../objects/PushNotificationMaxAggregateInput.schema';
import { PushNotificationOrderByWithAggregationInputObjectSchema } from '../objects/PushNotificationOrderByWithAggregationInput.schema';
import { PushNotificationScalarWhereWithAggregatesInputObjectSchema } from '../objects/PushNotificationScalarWhereWithAggregatesInput.schema'

type PushNotificationInputSchemaType = {
    findUnique: z.ZodType<Prisma.PushNotificationFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.PushNotificationFindFirstArgs>,
    findMany: z.ZodType<Prisma.PushNotificationFindManyArgs>,
    create: z.ZodType<Prisma.PushNotificationCreateArgs>,
    createMany: z.ZodType<Prisma.PushNotificationCreateManyArgs>,
    delete: z.ZodType<Prisma.PushNotificationDeleteArgs>,
    deleteMany: z.ZodType<Prisma.PushNotificationDeleteManyArgs>,
    update: z.ZodType<Prisma.PushNotificationUpdateArgs>,
    updateMany: z.ZodType<Prisma.PushNotificationUpdateManyArgs>,
    upsert: z.ZodType<Prisma.PushNotificationUpsertArgs>,
    aggregate: z.ZodType<Prisma.PushNotificationAggregateArgs>,
    groupBy: z.ZodType<Prisma.PushNotificationGroupByArgs>,
    count: z.ZodType<Prisma.PushNotificationCountArgs>
}

export const PushNotificationInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => PushNotificationSelectObjectSchema.optional()), include: z.lazy(() => PushNotificationIncludeObjectSchema.optional()), where: PushNotificationWhereUniqueInputObjectSchema
    }).strict(), findFirst: z.object({
        select: z.lazy(() => PushNotificationSelectObjectSchema.optional()), include: z.lazy(() => PushNotificationIncludeObjectSchema.optional()), where: PushNotificationWhereInputObjectSchema.optional(), orderBy: z.union([PushNotificationOrderByWithRelationInputObjectSchema, PushNotificationOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PushNotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(PushNotificationScalarFieldEnumSchema).optional()
    }).strict(), findMany: z.object({
        select: z.lazy(() => PushNotificationSelectObjectSchema.optional()), include: z.lazy(() => PushNotificationIncludeObjectSchema.optional()), where: PushNotificationWhereInputObjectSchema.optional(), orderBy: z.union([PushNotificationOrderByWithRelationInputObjectSchema, PushNotificationOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PushNotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(PushNotificationScalarFieldEnumSchema).optional()
    }).strict(), create: z.object({
        select: z.lazy(() => PushNotificationSelectObjectSchema.optional()), include: z.lazy(() => PushNotificationIncludeObjectSchema.optional()), data: z.union([PushNotificationCreateInputObjectSchema, PushNotificationUncheckedCreateInputObjectSchema])
    }).strict(), createMany: z.object({
        data: z.union([PushNotificationCreateManyInputObjectSchema, z.array(PushNotificationCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional()
    }).strict(), 'delete': z.object({
        select: z.lazy(() => PushNotificationSelectObjectSchema.optional()), include: z.lazy(() => PushNotificationIncludeObjectSchema.optional()), where: PushNotificationWhereUniqueInputObjectSchema
    }).strict(), deleteMany: z.object({
        where: PushNotificationWhereInputObjectSchema.optional()
    }).strict(), update: z.object({
        select: z.lazy(() => PushNotificationSelectObjectSchema.optional()), include: z.lazy(() => PushNotificationIncludeObjectSchema.optional()), data: z.union([PushNotificationUpdateInputObjectSchema, PushNotificationUncheckedUpdateInputObjectSchema]), where: PushNotificationWhereUniqueInputObjectSchema
    }).strict(), updateMany: z.object({
        data: z.union([PushNotificationUpdateManyMutationInputObjectSchema, PushNotificationUncheckedUpdateManyInputObjectSchema]), where: PushNotificationWhereInputObjectSchema.optional()
    }).strict(), upsert: z.object({
        select: z.lazy(() => PushNotificationSelectObjectSchema.optional()), include: z.lazy(() => PushNotificationIncludeObjectSchema.optional()), where: PushNotificationWhereUniqueInputObjectSchema, create: z.union([PushNotificationCreateInputObjectSchema, PushNotificationUncheckedCreateInputObjectSchema]), update: z.union([PushNotificationUpdateInputObjectSchema, PushNotificationUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: z.object({
        where: PushNotificationWhereInputObjectSchema.optional(), orderBy: z.union([PushNotificationOrderByWithRelationInputObjectSchema, PushNotificationOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PushNotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), PushNotificationCountAggregateInputObjectSchema]).optional(), _min: PushNotificationMinAggregateInputObjectSchema.optional(), _max: PushNotificationMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: z.object({
        where: PushNotificationWhereInputObjectSchema.optional(), orderBy: z.union([PushNotificationOrderByWithAggregationInputObjectSchema, PushNotificationOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PushNotificationScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PushNotificationScalarFieldEnumSchema), _count: z.union([z.literal(true), PushNotificationCountAggregateInputObjectSchema]).optional(), _min: PushNotificationMinAggregateInputObjectSchema.optional(), _max: PushNotificationMaxAggregateInputObjectSchema.optional()
    }).strict(), count: z.object({
        where: PushNotificationWhereInputObjectSchema.optional(), orderBy: z.union([PushNotificationOrderByWithRelationInputObjectSchema, PushNotificationOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PushNotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(PushNotificationScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), PushNotificationCountAggregateInputObjectSchema]).optional()
    }).strict(),
} as PushNotificationInputSchemaType;
