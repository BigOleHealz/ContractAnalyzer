/* eslint-disable */
import { z } from 'zod';
import { ClauseCreateWithoutContractInputObjectSchema } from './ClauseCreateWithoutContractInput.schema';
import { ClauseUncheckedCreateWithoutContractInputObjectSchema } from './ClauseUncheckedCreateWithoutContractInput.schema';
import { ClauseCreateOrConnectWithoutContractInputObjectSchema } from './ClauseCreateOrConnectWithoutContractInput.schema';
import { ClauseUpsertWithWhereUniqueWithoutContractInputObjectSchema } from './ClauseUpsertWithWhereUniqueWithoutContractInput.schema';
import { ClauseCreateManyContractInputEnvelopeObjectSchema } from './ClauseCreateManyContractInputEnvelope.schema';
import { ClauseWhereUniqueInputObjectSchema } from './ClauseWhereUniqueInput.schema';
import { ClauseUpdateWithWhereUniqueWithoutContractInputObjectSchema } from './ClauseUpdateWithWhereUniqueWithoutContractInput.schema';
import { ClauseUpdateManyWithWhereWithoutContractInputObjectSchema } from './ClauseUpdateManyWithWhereWithoutContractInput.schema';
import { ClauseScalarWhereInputObjectSchema } from './ClauseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseUncheckedUpdateManyWithoutContractNestedInput>;
export const ClauseUncheckedUpdateManyWithoutContractNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ClauseCreateWithoutContractInputObjectSchema), z.lazy(() => ClauseCreateWithoutContractInputObjectSchema).array(), z.lazy(() => ClauseUncheckedCreateWithoutContractInputObjectSchema), z.lazy(() => ClauseUncheckedCreateWithoutContractInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ClauseCreateOrConnectWithoutContractInputObjectSchema),
    z.lazy(() => ClauseCreateOrConnectWithoutContractInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ClauseUpsertWithWhereUniqueWithoutContractInputObjectSchema),
    z.lazy(() => ClauseUpsertWithWhereUniqueWithoutContractInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ClauseCreateManyContractInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => ClauseWhereUniqueInputObjectSchema),
    z.lazy(() => ClauseWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ClauseWhereUniqueInputObjectSchema),
    z.lazy(() => ClauseWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ClauseWhereUniqueInputObjectSchema),
    z.lazy(() => ClauseWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ClauseWhereUniqueInputObjectSchema),
    z.lazy(() => ClauseWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ClauseUpdateWithWhereUniqueWithoutContractInputObjectSchema),
    z.lazy(() => ClauseUpdateWithWhereUniqueWithoutContractInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ClauseUpdateManyWithWhereWithoutContractInputObjectSchema),
    z.lazy(() => ClauseUpdateManyWithWhereWithoutContractInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ClauseScalarWhereInputObjectSchema),
    z.lazy(() => ClauseScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
