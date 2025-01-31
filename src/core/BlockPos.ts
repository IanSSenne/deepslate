import { Direction } from './Direction'

export type BlockPos = [number, number, number]

export namespace BlockPos {
	export function create(x: number, y: number, z: number): BlockPos {
		return [x, y, z]
	}

	export const ZERO = BlockPos.create(0, 0, 0)

	export function offset(pos: BlockPos, dx: number, dy: number, dz: number): BlockPos {
		return [pos[0] + dx, pos[1] + dy, pos[2] + dz]
	}

	export function towards(pos: BlockPos, dir: Direction): BlockPos {
		return BlockPos.offset(pos, ...Direction.normal(dir))
	}

	export function equals(a: BlockPos, b: BlockPos) {
		if (a === b) return true
		return a[0] === b[0] && a[1] === b[1] && a[2] === b[2]
	}

	export function magnitude(pos: BlockPos) {
		return pos[0] * pos[0] + pos[1] * pos[1] + pos[2] * pos[2]
	}
}
