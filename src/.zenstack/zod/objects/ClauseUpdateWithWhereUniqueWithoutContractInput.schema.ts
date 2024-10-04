/* eslint-disable */
import { z } from 'zod';
import { ClauseWhereUniqueInputObjectSchema } from './ClauseWhereUniqueInput.schema';
import { ClauseUpdateWithoutContractInputObjectSchema } from './ClauseUpdateWithoutContractInput.schema';
import { ClauseUncheckedUpdateWithoutContractInputObjectSchema } from './ClauseUncheckedUpdateWithoutContractInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseUpdateWithWhereUniqueWithoutContractInput>;
export const ClauseUpdateWithWhereUniqueWithoutContractInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ClauseWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ClauseUpdateWithoutContractInputObjectSchema), z.lazy(() => ClauseUncheckedUpdateWithoutContractInputObjectSchema)])
}).strict() as SchemaType;
