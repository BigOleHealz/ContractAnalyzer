/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserNullableRelationFilterObjectSchema } from './UserNullableRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ClauseListRelationFilterObjectSchema } from './ClauseListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractWhereInput>;
export const ContractWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ContractWhereInputObjectSchema),
    z.lazy(() => ContractWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ContractWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ContractWhereInputObjectSchema),
    z.lazy(() => ContractWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), content: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), fileUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), userId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), dateCreated: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), dateUpdated: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), user: z.union([z.lazy(() => UserNullableRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema),
    z.null()]).optional().nullable(), clauses: z.lazy(() => ClauseListRelationFilterObjectSchema).optional()
}).strict() as SchemaType;
