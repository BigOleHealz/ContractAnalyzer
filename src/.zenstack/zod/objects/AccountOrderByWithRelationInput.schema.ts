/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountOrderByWithRelationInput>;
export const AccountOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), type: z.lazy(() => SortOrderSchema).optional(), provider: z.lazy(() => SortOrderSchema).optional(), providerAccountId: z.lazy(() => SortOrderSchema).optional(), refresh_token: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), access_token: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), expires_at: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), token_type: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), scope: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), id_token: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), session_state: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), refresh_token_expires_in: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict() as SchemaType;
