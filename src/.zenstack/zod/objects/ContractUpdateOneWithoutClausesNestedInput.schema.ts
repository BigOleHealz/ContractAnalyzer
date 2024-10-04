/* eslint-disable */
import { z } from 'zod';
import { ContractCreateWithoutClausesInputObjectSchema } from './ContractCreateWithoutClausesInput.schema';
import { ContractUncheckedCreateWithoutClausesInputObjectSchema } from './ContractUncheckedCreateWithoutClausesInput.schema';
import { ContractCreateOrConnectWithoutClausesInputObjectSchema } from './ContractCreateOrConnectWithoutClausesInput.schema';
import { ContractUpsertWithoutClausesInputObjectSchema } from './ContractUpsertWithoutClausesInput.schema';
import { ContractWhereInputObjectSchema } from './ContractWhereInput.schema';
import { ContractWhereUniqueInputObjectSchema } from './ContractWhereUniqueInput.schema';
import { ContractUpdateToOneWithWhereWithoutClausesInputObjectSchema } from './ContractUpdateToOneWithWhereWithoutClausesInput.schema';
import { ContractUpdateWithoutClausesInputObjectSchema } from './ContractUpdateWithoutClausesInput.schema';
import { ContractUncheckedUpdateWithoutClausesInputObjectSchema } from './ContractUncheckedUpdateWithoutClausesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractUpdateOneWithoutClausesNestedInput>;
export const ContractUpdateOneWithoutClausesNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ContractCreateWithoutClausesInputObjectSchema), z.lazy(() => ContractUncheckedCreateWithoutClausesInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutClausesInputObjectSchema).optional(), upsert: z.lazy(() => ContractUpsertWithoutClausesInputObjectSchema).optional(), disconnect: z.union([z.boolean(),
    z.lazy(() => ContractWhereInputObjectSchema)]).optional(), delete: z.union([z.boolean(),
    z.lazy(() => ContractWhereInputObjectSchema)]).optional(), connect: z.lazy(() => ContractWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => ContractUpdateToOneWithWhereWithoutClausesInputObjectSchema), z.lazy(() => ContractUpdateWithoutClausesInputObjectSchema), z.lazy(() => ContractUncheckedUpdateWithoutClausesInputObjectSchema)]).optional()
}).strict() as SchemaType;
