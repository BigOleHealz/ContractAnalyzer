/* eslint-disable */
import { z } from 'zod';
import { ContractWhereUniqueInputObjectSchema } from './ContractWhereUniqueInput.schema';
import { ContractCreateWithoutUserInputObjectSchema } from './ContractCreateWithoutUserInput.schema';
import { ContractUncheckedCreateWithoutUserInputObjectSchema } from './ContractUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractCreateOrConnectWithoutUserInput>;
export const ContractCreateOrConnectWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ContractWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ContractCreateWithoutUserInputObjectSchema), z.lazy(() => ContractUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
