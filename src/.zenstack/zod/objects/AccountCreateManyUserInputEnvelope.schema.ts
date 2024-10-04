/* eslint-disable */
import { z } from 'zod';
import { AccountCreateManyUserInputObjectSchema } from './AccountCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountCreateManyUserInputEnvelope>;
export const AccountCreateManyUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => AccountCreateManyUserInputObjectSchema),
    z.lazy(() => AccountCreateManyUserInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
