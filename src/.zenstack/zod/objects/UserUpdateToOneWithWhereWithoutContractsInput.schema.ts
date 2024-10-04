/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutContractsInputObjectSchema } from './UserUpdateWithoutContractsInput.schema';
import { UserUncheckedUpdateWithoutContractsInputObjectSchema } from './UserUncheckedUpdateWithoutContractsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutContractsInput>;
export const UserUpdateToOneWithWhereWithoutContractsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutContractsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutContractsInputObjectSchema)])
}).strict() as SchemaType;
