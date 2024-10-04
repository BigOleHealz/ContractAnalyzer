/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutAccountsInputObjectSchema } from './UserUpdateWithoutAccountsInput.schema';
import { UserUncheckedUpdateWithoutAccountsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput>;
export const UserUpdateToOneWithWhereWithoutAccountsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputObjectSchema)])
}).strict() as SchemaType;
