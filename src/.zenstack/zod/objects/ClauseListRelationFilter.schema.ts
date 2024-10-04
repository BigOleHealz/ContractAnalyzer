/* eslint-disable */
import { z } from 'zod';
import { ClauseWhereInputObjectSchema } from './ClauseWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseListRelationFilter>;
export const ClauseListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => ClauseWhereInputObjectSchema).optional(), some: z.lazy(() => ClauseWhereInputObjectSchema).optional(), none: z.lazy(() => ClauseWhereInputObjectSchema).optional()
}).strict() as SchemaType;
