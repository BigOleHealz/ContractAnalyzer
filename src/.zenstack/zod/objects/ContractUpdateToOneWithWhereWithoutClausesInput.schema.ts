/* eslint-disable */
import { z } from 'zod';
import { ContractWhereInputObjectSchema } from './ContractWhereInput.schema';
import { ContractUpdateWithoutClausesInputObjectSchema } from './ContractUpdateWithoutClausesInput.schema';
import { ContractUncheckedUpdateWithoutClausesInputObjectSchema } from './ContractUncheckedUpdateWithoutClausesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractUpdateToOneWithWhereWithoutClausesInput>;
export const ContractUpdateToOneWithWhereWithoutClausesInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ContractWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => ContractUpdateWithoutClausesInputObjectSchema), z.lazy(() => ContractUncheckedUpdateWithoutClausesInputObjectSchema)])
}).strict() as SchemaType;
