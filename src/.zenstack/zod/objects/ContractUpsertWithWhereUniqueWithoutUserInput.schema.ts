/* eslint-disable */
import { z } from 'zod';
import { ContractWhereUniqueInputObjectSchema } from './ContractWhereUniqueInput.schema';
import { ContractUpdateWithoutUserInputObjectSchema } from './ContractUpdateWithoutUserInput.schema';
import { ContractUncheckedUpdateWithoutUserInputObjectSchema } from './ContractUncheckedUpdateWithoutUserInput.schema';
import { ContractCreateWithoutUserInputObjectSchema } from './ContractCreateWithoutUserInput.schema';
import { ContractUncheckedCreateWithoutUserInputObjectSchema } from './ContractUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractUpsertWithWhereUniqueWithoutUserInput>;
export const ContractUpsertWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ContractWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ContractUpdateWithoutUserInputObjectSchema), z.lazy(() => ContractUncheckedUpdateWithoutUserInputObjectSchema)]), create: z.union([z.lazy(() => ContractCreateWithoutUserInputObjectSchema), z.lazy(() => ContractUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
