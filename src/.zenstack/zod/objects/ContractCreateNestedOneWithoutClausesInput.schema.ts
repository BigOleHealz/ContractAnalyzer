/* eslint-disable */
import { z } from 'zod';
import { ContractCreateWithoutClausesInputObjectSchema } from './ContractCreateWithoutClausesInput.schema';
import { ContractUncheckedCreateWithoutClausesInputObjectSchema } from './ContractUncheckedCreateWithoutClausesInput.schema';
import { ContractCreateOrConnectWithoutClausesInputObjectSchema } from './ContractCreateOrConnectWithoutClausesInput.schema';
import { ContractWhereUniqueInputObjectSchema } from './ContractWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractCreateNestedOneWithoutClausesInput>;
export const ContractCreateNestedOneWithoutClausesInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ContractCreateWithoutClausesInputObjectSchema), z.lazy(() => ContractUncheckedCreateWithoutClausesInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutClausesInputObjectSchema).optional(), connect: z.lazy(() => ContractWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
