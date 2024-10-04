/* eslint-disable */
import { z } from 'zod';
import { SessionWhereInputObjectSchema } from './SessionWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionListRelationFilter>;
export const SessionListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => SessionWhereInputObjectSchema).optional(), some: z.lazy(() => SessionWhereInputObjectSchema).optional(), none: z.lazy(() => SessionWhereInputObjectSchema).optional()
}).strict() as SchemaType;
