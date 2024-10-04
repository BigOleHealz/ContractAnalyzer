/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutContractsInputObjectSchema } from './UserUpdateWithoutContractsInput.schema';
import { UserUncheckedUpdateWithoutContractsInputObjectSchema } from './UserUncheckedUpdateWithoutContractsInput.schema';
import { UserCreateWithoutContractsInputObjectSchema } from './UserCreateWithoutContractsInput.schema';
import { UserUncheckedCreateWithoutContractsInputObjectSchema } from './UserUncheckedCreateWithoutContractsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutContractsInput>;
export const UserUpsertWithoutContractsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutContractsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutContractsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutContractsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutContractsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
