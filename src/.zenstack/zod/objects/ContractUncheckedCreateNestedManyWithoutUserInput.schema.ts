/* eslint-disable */
import { z } from 'zod';
import { ContractCreateWithoutUserInputObjectSchema } from './ContractCreateWithoutUserInput.schema';
import { ContractUncheckedCreateWithoutUserInputObjectSchema } from './ContractUncheckedCreateWithoutUserInput.schema';
import { ContractCreateOrConnectWithoutUserInputObjectSchema } from './ContractCreateOrConnectWithoutUserInput.schema';
import { ContractCreateManyUserInputEnvelopeObjectSchema } from './ContractCreateManyUserInputEnvelope.schema';
import { ContractWhereUniqueInputObjectSchema } from './ContractWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractUncheckedCreateNestedManyWithoutUserInput>;
export const ContractUncheckedCreateNestedManyWithoutUserInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ContractCreateWithoutUserInputObjectSchema), z.lazy(() => ContractCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ContractUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ContractUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ContractCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => ContractCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ContractCreateManyUserInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => ContractWhereUniqueInputObjectSchema),
    z.lazy(() => ContractWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
