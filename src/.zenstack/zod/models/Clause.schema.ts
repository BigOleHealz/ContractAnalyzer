/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    content: z.string().nullish(),
    isImportant: z.boolean().nullish(),
    aiAnalysis: z.string().nullish(),
    dateCreated: z.coerce.date().default(() => new Date()),
    dateUpdated: z.coerce.date().default(() => new Date()),
}
).strict();
const relationSchema = z.object({
    contract: z.record(z.unknown()).optional(),
}
);
const fkSchema = z.object({
    contractId: z.string(),
}
);

/**
 * `Clause` schema excluding foreign keys and relations.
 */
export const ClauseScalarSchema = baseSchema;


/**
 * `Clause` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const ClauseSchema = ClauseScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const ClausePrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const ClausePrismaUpdateSchema = z.object({
    id: z.string(),
    content: z.string().nullish(),
    isImportant: z.boolean().nullish(),
    aiAnalysis: z.string().nullish(),
    dateCreated: z.coerce.date().default(() => new Date()),
    dateUpdated: z.coerce.date().default(() => new Date())
}).partial().passthrough();


/**
 * `Clause` schema for create operations excluding foreign keys and relations.
 */
export const ClauseCreateScalarSchema = baseSchema.partial({
    id: true, dateCreated: true, dateUpdated: true
});


/**
 * `Clause` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const ClauseCreateSchema = ClauseCreateScalarSchema.merge(fkSchema);


/**
 * `Clause` schema for update operations excluding foreign keys and relations.
 */
export const ClauseUpdateScalarSchema = baseSchema.partial();


/**
 * `Clause` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const ClauseUpdateSchema = ClauseUpdateScalarSchema.merge(fkSchema.partial());

