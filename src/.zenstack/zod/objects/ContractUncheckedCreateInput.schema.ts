/* eslint-disable */
import { z } from 'zod';
import { ClauseUncheckedCreateNestedManyWithoutContractInputObjectSchema } from './ClauseUncheckedCreateNestedManyWithoutContractInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractUncheckedCreateInput>;
export const ContractUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), content: z.union([z.string(),
    z.null()]).optional().nullable(), fileUrl: z.union([z.string(),
    z.null()]).optional().nullable(), status: z.union([z.string(),
    z.null()]).optional().nullable(), userId: z.string(), dateCreated: z.union([z.date().optional(), z.string().datetime().optional()]), dateUpdated: z.union([z.date().optional(), z.string().datetime().optional()]), clauses: z.lazy(() => ClauseUncheckedCreateNestedManyWithoutContractInputObjectSchema).optional()
}).strict() as SchemaType;
