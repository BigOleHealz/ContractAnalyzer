/* eslint-disable */
import { z } from 'zod';
import { ContractUpdateWithoutClausesInputObjectSchema } from './ContractUpdateWithoutClausesInput.schema';
import { ContractUncheckedUpdateWithoutClausesInputObjectSchema } from './ContractUncheckedUpdateWithoutClausesInput.schema';
import { ContractCreateWithoutClausesInputObjectSchema } from './ContractCreateWithoutClausesInput.schema';
import { ContractUncheckedCreateWithoutClausesInputObjectSchema } from './ContractUncheckedCreateWithoutClausesInput.schema';
import { ContractWhereInputObjectSchema } from './ContractWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractUpsertWithoutClausesInput>;
export const ContractUpsertWithoutClausesInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => ContractUpdateWithoutClausesInputObjectSchema), z.lazy(() => ContractUncheckedUpdateWithoutClausesInputObjectSchema)]), create: z.union([z.lazy(() => ContractCreateWithoutClausesInputObjectSchema), z.lazy(() => ContractUncheckedCreateWithoutClausesInputObjectSchema)]), where: z.lazy(() => ContractWhereInputObjectSchema).optional()
}).strict() as SchemaType;
