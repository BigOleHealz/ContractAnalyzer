/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ClauseInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).clause.createMany(input as any))),

        create: procedure.input($Schema.ClauseInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).clause.create(input as any))),

        deleteMany: procedure.input($Schema.ClauseInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).clause.deleteMany(input as any))),

        delete: procedure.input($Schema.ClauseInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).clause.delete(input as any))),

        findFirst: procedure.input($Schema.ClauseInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).clause.findFirst(input as any))),

        findMany: procedure.input($Schema.ClauseInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).clause.findMany(input as any))),

        findUnique: procedure.input($Schema.ClauseInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).clause.findUnique(input as any))),

        updateMany: procedure.input($Schema.ClauseInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).clause.updateMany(input as any))),

        update: procedure.input($Schema.ClauseInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).clause.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ClauseCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClauseCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClauseCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClauseCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ClauseCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClauseCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ClauseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ClauseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClauseCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClauseCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ClauseGetPayload<T>, Context>) => Promise<Prisma.ClauseGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ClauseDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClauseDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClauseDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClauseDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ClauseDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClauseDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ClauseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ClauseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClauseDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClauseDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ClauseGetPayload<T>, Context>) => Promise<Prisma.ClauseGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ClauseFindFirstArgs, TData = Prisma.ClauseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ClauseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ClauseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ClauseFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ClauseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ClauseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ClauseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ClauseFindManyArgs, TData = Array<Prisma.ClauseGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ClauseFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ClauseGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ClauseFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ClauseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ClauseGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ClauseGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ClauseFindUniqueArgs, TData = Prisma.ClauseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ClauseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ClauseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ClauseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ClauseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ClauseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ClauseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ClauseUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClauseUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClauseUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClauseUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ClauseUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClauseUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ClauseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ClauseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClauseUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClauseUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ClauseGetPayload<T>, Context>) => Promise<Prisma.ClauseGetPayload<T>>
            };

    };
}
