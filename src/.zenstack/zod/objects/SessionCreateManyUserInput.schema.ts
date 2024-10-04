/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionCreateManyUserInput>;
export const SessionCreateManyUserInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), sessionToken: z.string(), expires: z.union([z.date(), z.string().datetime()])
}).strict() as SchemaType;
