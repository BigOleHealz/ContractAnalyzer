/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionOrderByWithRelationInput>;
export const SessionOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), sessionToken: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), expires: z.lazy(() => SortOrderSchema).optional(), user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict() as SchemaType;
