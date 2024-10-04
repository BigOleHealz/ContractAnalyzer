/* eslint-disable */
import { z } from 'zod';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema';
import { AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema';
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema';
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput>;
export const AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => AccountUpdateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema)]), create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
