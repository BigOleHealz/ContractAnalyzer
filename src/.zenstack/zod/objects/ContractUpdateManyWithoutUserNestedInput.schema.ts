/* eslint-disable */
import { z } from 'zod';
import { ContractCreateWithoutUserInputObjectSchema } from './ContractCreateWithoutUserInput.schema';
import { ContractUncheckedCreateWithoutUserInputObjectSchema } from './ContractUncheckedCreateWithoutUserInput.schema';
import { ContractCreateOrConnectWithoutUserInputObjectSchema } from './ContractCreateOrConnectWithoutUserInput.schema';
import { ContractUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ContractUpsertWithWhereUniqueWithoutUserInput.schema';
import { ContractCreateManyUserInputEnvelopeObjectSchema } from './ContractCreateManyUserInputEnvelope.schema';
import { ContractWhereUniqueInputObjectSchema } from './ContractWhereUniqueInput.schema';
import { ContractUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ContractUpdateWithWhereUniqueWithoutUserInput.schema';
import { ContractUpdateManyWithWhereWithoutUserInputObjectSchema } from './ContractUpdateManyWithWhereWithoutUserInput.schema';
import { ContractScalarWhereInputObjectSchema } from './ContractScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractUpdateManyWithoutUserNestedInput>;
export const ContractUpdateManyWithoutUserNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ContractCreateWithoutUserInputObjectSchema), z.lazy(() => ContractCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ContractUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ContractUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ContractCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => ContractCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ContractUpsertWithWhereUniqueWithoutUserInputObjectSchema),
    z.lazy(() => ContractUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ContractCreateManyUserInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => ContractWhereUniqueInputObjectSchema),
    z.lazy(() => ContractWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ContractWhereUniqueInputObjectSchema),
    z.lazy(() => ContractWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ContractWhereUniqueInputObjectSchema),
    z.lazy(() => ContractWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ContractWhereUniqueInputObjectSchema),
    z.lazy(() => ContractWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ContractUpdateWithWhereUniqueWithoutUserInputObjectSchema),
    z.lazy(() => ContractUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ContractUpdateManyWithWhereWithoutUserInputObjectSchema),
    z.lazy(() => ContractUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ContractScalarWhereInputObjectSchema),
    z.lazy(() => ContractScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
