/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutContractsInputObjectSchema } from './UserCreateNestedOneWithoutContractsInput.schema';
import { ClauseCreateNestedManyWithoutContractInputObjectSchema } from './ClauseCreateNestedManyWithoutContractInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractCreateInput>;
export const ContractCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), content: z.union([z.string(),
    z.null()]).optional().nullable(), fileUrl: z.union([z.string(),
    z.null()]).optional().nullable(), status: z.union([z.string(),
    z.null()]).optional().nullable(), dateCreated: z.union([z.date().optional(), z.string().datetime().optional()]), dateUpdated: z.union([z.date().optional(), z.string().datetime().optional()]), user: z.lazy(() => UserCreateNestedOneWithoutContractsInputObjectSchema).optional(), clauses: z.lazy(() => ClauseCreateNestedManyWithoutContractInputObjectSchema).optional()
}).strict() as SchemaType;
