/* eslint-disable */
import { z } from 'zod';
import { ContractWhereUniqueInputObjectSchema } from './ContractWhereUniqueInput.schema';
import { ContractCreateWithoutClausesInputObjectSchema } from './ContractCreateWithoutClausesInput.schema';
import { ContractUncheckedCreateWithoutClausesInputObjectSchema } from './ContractUncheckedCreateWithoutClausesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractCreateOrConnectWithoutClausesInput>;
export const ContractCreateOrConnectWithoutClausesInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ContractWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ContractCreateWithoutClausesInputObjectSchema), z.lazy(() => ContractUncheckedCreateWithoutClausesInputObjectSchema)])
}).strict() as SchemaType;
