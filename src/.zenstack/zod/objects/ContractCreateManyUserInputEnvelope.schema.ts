/* eslint-disable */
import { z } from 'zod';
import { ContractCreateManyUserInputObjectSchema } from './ContractCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractCreateManyUserInputEnvelope>;
export const ContractCreateManyUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ContractCreateManyUserInputObjectSchema),
    z.lazy(() => ContractCreateManyUserInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
