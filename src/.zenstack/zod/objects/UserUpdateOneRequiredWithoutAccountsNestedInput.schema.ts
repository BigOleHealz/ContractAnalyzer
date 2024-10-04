/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema';
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema';
import { UserCreateOrConnectWithoutAccountsInputObjectSchema } from './UserCreateOrConnectWithoutAccountsInput.schema';
import { UserUpsertWithoutAccountsInputObjectSchema } from './UserUpsertWithoutAccountsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutAccountsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutAccountsInput.schema';
import { UserUpdateWithoutAccountsInputObjectSchema } from './UserUpdateWithoutAccountsInput.schema';
import { UserUncheckedUpdateWithoutAccountsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput>;
export const UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutAccountsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputObjectSchema), z.lazy(() => UserUpdateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputObjectSchema)]).optional()
}).strict() as SchemaType;
