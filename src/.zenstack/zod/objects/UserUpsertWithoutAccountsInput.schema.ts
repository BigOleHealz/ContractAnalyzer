/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutAccountsInputObjectSchema } from './UserUpdateWithoutAccountsInput.schema';
import { UserUncheckedUpdateWithoutAccountsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountsInput.schema';
import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema';
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutAccountsInput>;
export const UserUpsertWithoutAccountsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
