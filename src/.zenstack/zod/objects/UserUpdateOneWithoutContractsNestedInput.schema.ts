/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutContractsInputObjectSchema } from './UserCreateWithoutContractsInput.schema';
import { UserUncheckedCreateWithoutContractsInputObjectSchema } from './UserUncheckedCreateWithoutContractsInput.schema';
import { UserCreateOrConnectWithoutContractsInputObjectSchema } from './UserCreateOrConnectWithoutContractsInput.schema';
import { UserUpsertWithoutContractsInputObjectSchema } from './UserUpsertWithoutContractsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutContractsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutContractsInput.schema';
import { UserUpdateWithoutContractsInputObjectSchema } from './UserUpdateWithoutContractsInput.schema';
import { UserUncheckedUpdateWithoutContractsInputObjectSchema } from './UserUncheckedUpdateWithoutContractsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneWithoutContractsNestedInput>;
export const UserUpdateOneWithoutContractsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutContractsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutContractsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutContractsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutContractsInputObjectSchema).optional(), disconnect: z.union([z.boolean(),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), delete: z.union([z.boolean(),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutContractsInputObjectSchema), z.lazy(() => UserUpdateWithoutContractsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutContractsInputObjectSchema)]).optional()
}).strict() as SchemaType;
