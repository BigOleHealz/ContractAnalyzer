/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    content: z.string().nullish(),
    fileUrl: z.string().nullish(),
    status: z.string().nullish(),
    dateCreated: z.coerce.date().default(() => new Date()),
    dateUpdated: z.coerce.date().default(() => new Date()),
}
).strict();
const relationSchema = z.object({
    user: z.record(z.unknown()).optional(),
    clauses: z.array(z.unknown()).optional(),
}
);
const fkSchema = z.object({
    userId: z.string(),
}
);

/**
 * `Contract` schema excluding foreign keys and relations.
 */
export const ContractScalarSchema = baseSchema;


/**
 * `Contract` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const ContractSchema = ContractScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const ContractPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const ContractPrismaUpdateSchema = z.object({
    id: z.string(),
    content: z.string().nullish(),
    fileUrl: z.string().nullish(),
    status: z.string().nullish(),
    dateCreated: z.coerce.date().default(() => new Date()),
    dateUpdated: z.coerce.date().default(() => new Date())
}).partial().passthrough();


/**
 * `Contract` schema for create operations excluding foreign keys and relations.
 */
export const ContractCreateScalarSchema = baseSchema.partial({
    id: true, dateCreated: true, dateUpdated: true
});


/**
 * `Contract` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const ContractCreateSchema = ContractCreateScalarSchema.merge(fkSchema);


/**
 * `Contract` schema for update operations excluding foreign keys and relations.
 */
export const ContractUpdateScalarSchema = baseSchema.partial();


/**
 * `Contract` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const ContractUpdateSchema = ContractUpdateScalarSchema.merge(fkSchema.partial());

