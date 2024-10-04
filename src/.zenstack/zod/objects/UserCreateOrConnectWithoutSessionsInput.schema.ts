/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema';
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput>;
export const UserCreateOrConnectWithoutSessionsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema)])
}).strict() as SchemaType;
