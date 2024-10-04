/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ContractUpdateOneWithoutClausesNestedInputObjectSchema } from './ContractUpdateOneWithoutClausesNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ClauseUpdateInput>;
export const ClauseUpdateInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), content: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), isImportant: z.union([z.boolean(),
    z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), aiAnalysis: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), dateCreated: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), dateUpdated: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), contract: z.lazy(() => ContractUpdateOneWithoutClausesNestedInputObjectSchema).optional()
}).strict() as SchemaType;
