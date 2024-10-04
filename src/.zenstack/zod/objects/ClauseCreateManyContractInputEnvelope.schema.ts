/* eslint-disable */
import { z } from 'zod';
import { ClauseCreateManyContractInputObjectSchema } from './ClauseCreateManyContractInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseCreateManyContractInputEnvelope>;
export const ClauseCreateManyContractInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ClauseCreateManyContractInputObjectSchema),
    z.lazy(() => ClauseCreateManyContractInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
