/* eslint-disable */
import { z } from 'zod';
import { SessionCreateManyUserInputObjectSchema } from './SessionCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionCreateManyUserInputEnvelope>;
export const SessionCreateManyUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => SessionCreateManyUserInputObjectSchema),
    z.lazy(() => SessionCreateManyUserInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
