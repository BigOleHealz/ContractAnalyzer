/* eslint-disable */
import { z } from 'zod';
import { ClauseWhereUniqueInputObjectSchema } from './ClauseWhereUniqueInput.schema';
import { ClauseUpdateWithoutContractInputObjectSchema } from './ClauseUpdateWithoutContractInput.schema';
import { ClauseUncheckedUpdateWithoutContractInputObjectSchema } from './ClauseUncheckedUpdateWithoutContractInput.schema';
import { ClauseCreateWithoutContractInputObjectSchema } from './ClauseCreateWithoutContractInput.schema';
import { ClauseUncheckedCreateWithoutContractInputObjectSchema } from './ClauseUncheckedCreateWithoutContractInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseUpsertWithWhereUniqueWithoutContractInput>;
export const ClauseUpsertWithWhereUniqueWithoutContractInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ClauseWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ClauseUpdateWithoutContractInputObjectSchema), z.lazy(() => ClauseUncheckedUpdateWithoutContractInputObjectSchema)]), create: z.union([z.lazy(() => ClauseCreateWithoutContractInputObjectSchema), z.lazy(() => ClauseUncheckedCreateWithoutContractInputObjectSchema)])
}).strict() as SchemaType;
