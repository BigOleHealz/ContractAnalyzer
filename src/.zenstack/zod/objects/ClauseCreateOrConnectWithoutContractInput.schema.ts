/* eslint-disable */
import { z } from 'zod';
import { ClauseWhereUniqueInputObjectSchema } from './ClauseWhereUniqueInput.schema';
import { ClauseCreateWithoutContractInputObjectSchema } from './ClauseCreateWithoutContractInput.schema';
import { ClauseUncheckedCreateWithoutContractInputObjectSchema } from './ClauseUncheckedCreateWithoutContractInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseCreateOrConnectWithoutContractInput>;
export const ClauseCreateOrConnectWithoutContractInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ClauseWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ClauseCreateWithoutContractInputObjectSchema), z.lazy(() => ClauseUncheckedCreateWithoutContractInputObjectSchema)])
}).strict() as SchemaType;
