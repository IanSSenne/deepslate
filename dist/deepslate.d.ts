interface Random {
    consume(count: number): void;
    nextInt(max?: number): number;
    nextLong(): bigint;
    nextFloat(): number;
    nextDouble(): number;
    fork(): Random;
}
interface PositionalRandom {
    at(x: number, y: number, z: number): Random;
    fromHashOf(name: string): Random;
    seedKey(): [bigint, bigint];
}

declare class XoroshiroRandom implements Random {
    private static readonly SILVER_RATIO_64;
    private static readonly GOLDEN_RATIO_64;
    private static readonly FLOAT_MULTIPLIER;
    private static readonly DOUBLE_MULTIPLIER;
    private static readonly BIGINT_1;
    private static readonly BIGINT_17;
    private static readonly BIGINT_21;
    private static readonly BIGINT_27;
    private static readonly BIGINT_28;
    private static readonly BIGINT_30;
    private static readonly BIGINT_31;
    private static readonly BIGINT_32;
    private static readonly BIGINT_49;
    private static readonly BIGINT_64;
    private static readonly STAFFORD_1;
    private static readonly STAFFORD_2;
    private static readonly MAX_ULONG;
    private static readonly POW2_60;
    private static readonly POW2_63;
    private static readonly MAX_UINT;
    private seed;
    constructor(seed: [bigint, bigint]);
    static create(seed: bigint): XoroshiroRandom;
    private static mixStafford13;
    private static upgradeSeedTo128bit;
    static rotateLeft(value: bigint, shift: bigint): bigint;
    setSeed(seed: bigint): void;
    fork(): XoroshiroRandom;
    next(): bigint;
    nextLong(): bigint;
    consume(count: number): void;
    private nextBits;
    nextInt(max?: number): number;
    nextFloat(): number;
    nextDouble(): number;
    parityConfigString(): string;
}

declare class SimplexNoise {
    private static readonly GRADIENT;
    private static readonly F2;
    private static readonly G2;
    readonly p: number[];
    readonly xo: number;
    readonly yo: number;
    readonly zo: number;
    constructor(random: Random);
    sample2D(d: number, d2: number): number;
    sample(x: number, y: number, z: number): number;
    private P;
    private getCornerNoise3D;
    static gradDot(a: number, b: number, c: number, d: number): number;
}

export { PositionalRandom, Random, SimplexNoise, XoroshiroRandom };
