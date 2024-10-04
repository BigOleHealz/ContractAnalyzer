/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutContractsInputObjectSchema } from './UserCreateWithoutContractsInput.schema';
import { UserUncheckedCreateWithoutContractsInputObjectSchema } from './UserUncheckedCreateWithoutContractsInput.schema';
import { UserCreateOrConnectWithoutContractsInputObjectSchema } from './UserCreateOrConnectWithoutContractsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutContractsInput>;
export const UserCreateNestedOneWithoutContractsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutContractsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutContractsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutContractsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
