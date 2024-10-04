/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    sessionToken: z.string(),
    expires: z.coerce.date(),
}
).strict();
const relationSchema = z.object({
    user: z.record(z.unknown()),
}
);
const fkSchema = z.object({
    userId: z.string(),
}
);

/**
 * `Session` schema excluding foreign keys and relations.
 */
export const SessionScalarSchema = baseSchema;


/**
 * `Session` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const SessionSchema = SessionScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const SessionPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const SessionPrismaUpdateSchema = z.object({
    id: z.string(),
    sessionToken: z.string(),
    expires: z.coerce.date()
}).partial().passthrough();


/**
 * `Session` schema for create operations excluding foreign keys and relations.
 */
export const SessionCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `Session` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const SessionCreateSchema = SessionCreateScalarSchema.merge(fkSchema);


/**
 * `Session` schema for update operations excluding foreign keys and relations.
 */
export const SessionUpdateScalarSchema = baseSchema.partial();


/**
 * `Session` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const SessionUpdateSchema = SessionUpdateScalarSchema.merge(fkSchema.partial());

