/* eslint-disable */
import { z } from 'zod';
import { ClauseCreateWithoutContractInputObjectSchema } from './ClauseCreateWithoutContractInput.schema';
import { ClauseUncheckedCreateWithoutContractInputObjectSchema } from './ClauseUncheckedCreateWithoutContractInput.schema';
import { ClauseCreateOrConnectWithoutContractInputObjectSchema } from './ClauseCreateOrConnectWithoutContractInput.schema';
import { ClauseCreateManyContractInputEnvelopeObjectSchema } from './ClauseCreateManyContractInputEnvelope.schema';
import { ClauseWhereUniqueInputObjectSchema } from './ClauseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseCreateNestedManyWithoutContractInput>;
export const ClauseCreateNestedManyWithoutContractInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ClauseCreateWithoutContractInputObjectSchema), z.lazy(() => ClauseCreateWithoutContractInputObjectSchema).array(), z.lazy(() => ClauseUncheckedCreateWithoutContractInputObjectSchema), z.lazy(() => ClauseUncheckedCreateWithoutContractInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ClauseCreateOrConnectWithoutContractInputObjectSchema),
    z.lazy(() => ClauseCreateOrConnectWithoutContractInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ClauseCreateManyContractInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => ClauseWhereUniqueInputObjectSchema),
    z.lazy(() => ClauseWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
