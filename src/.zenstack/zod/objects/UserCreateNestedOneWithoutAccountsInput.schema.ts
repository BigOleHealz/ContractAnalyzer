/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema';
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema';
import { UserCreateOrConnectWithoutAccountsInputObjectSchema } from './UserCreateOrConnectWithoutAccountsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput>;
export const UserCreateNestedOneWithoutAccountsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
