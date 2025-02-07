/* eslint-disable */
import type { Prisma } from '@prisma/client';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult, UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult } from '@trpc/react-query/shared';
import type { AnyRouter } from '@trpc/server';
import * as _Schema from '@zenstackhq/runtime/zod/input';
import { type BaseConfig, db, type ProcBuilder, type RouterFactory } from ".";
import { checkMutate, checkRead } from '../helper';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ContractInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contract.createMany(input as any))),

        create: procedure.input($Schema.ContractInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contract.create(input as any))),

        deleteMany: procedure.input($Schema.ContractInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contract.deleteMany(input as any))),

        delete: procedure.input($Schema.ContractInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contract.delete(input as any))),

        findFirst: procedure.input($Schema.ContractInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).contract.findFirst(input as any))),

        findMany: procedure.input($Schema.ContractInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).contract.findMany(input as any))),

        findUnique: procedure.input($Schema.ContractInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).contract.findUnique(input as any))),

        updateMany: procedure.input($Schema.ContractInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contract.updateMany(input as any))),

        update: procedure.input($Schema.ContractInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contract.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ContractCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContractCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContractCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContractCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ContractCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContractCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContractGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContractGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContractCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContractCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContractGetPayload<T>, Context>) => Promise<Prisma.ContractGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ContractDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContractDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContractDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContractDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ContractDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContractDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContractGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContractGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContractDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContractDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContractGetPayload<T>, Context>) => Promise<Prisma.ContractGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ContractFindFirstArgs, TData = Prisma.ContractGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContractFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContractGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContractFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContractFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContractGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContractGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ContractFindManyArgs, TData = Array<Prisma.ContractGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ContractFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ContractGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContractFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContractFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ContractGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ContractGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ContractFindUniqueArgs, TData = Prisma.ContractGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContractFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContractGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContractFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContractFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContractGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContractGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ContractUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContractUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContractUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContractUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ContractUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContractUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContractGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContractGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContractUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContractUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContractGetPayload<T>, Context>) => Promise<Prisma.ContractGetPayload<T>>
            };

    };
}
