/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionCreateManyInput>;
export const SessionCreateManyInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), sessionToken: z.string(), userId: z.string(), expires: z.union([z.date(), z.string().datetime()])
}).strict() as SchemaType;
