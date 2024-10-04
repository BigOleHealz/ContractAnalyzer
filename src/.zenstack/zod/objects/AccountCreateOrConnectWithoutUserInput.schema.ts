/* eslint-disable */
import { z } from 'zod';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema';
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput>;
export const AccountCreateOrConnectWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
