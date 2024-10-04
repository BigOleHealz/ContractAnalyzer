/* eslint-disable */
import { z } from 'zod';
import { ClauseScalarWhereInputObjectSchema } from './ClauseScalarWhereInput.schema';
import { ClauseUpdateManyMutationInputObjectSchema } from './ClauseUpdateManyMutationInput.schema';
import { ClauseUncheckedUpdateManyWithoutContractInputObjectSchema } from './ClauseUncheckedUpdateManyWithoutContractInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseUpdateManyWithWhereWithoutContractInput>;
export const ClauseUpdateManyWithWhereWithoutContractInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ClauseScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ClauseUpdateManyMutationInputObjectSchema), z.lazy(() => ClauseUncheckedUpdateManyWithoutContractInputObjectSchema)])
}).strict() as SchemaType;
