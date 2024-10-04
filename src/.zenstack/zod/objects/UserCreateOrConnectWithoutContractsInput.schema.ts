/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutContractsInputObjectSchema } from './UserCreateWithoutContractsInput.schema';
import { UserUncheckedCreateWithoutContractsInputObjectSchema } from './UserUncheckedCreateWithoutContractsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutContractsInput>;
export const UserCreateOrConnectWithoutContractsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutContractsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutContractsInputObjectSchema)])
}).strict() as SchemaType;
