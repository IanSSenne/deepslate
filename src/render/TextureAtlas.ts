export type UV = [number, number, number, number]

export interface TextureAtlasProvider {
	getTextureAtlas(): ImageData
	getTextureUV(texture: string): UV
}

export class TextureAtlas implements TextureAtlasProvider {
	private readonly part: number

	constructor(
		private readonly img: ImageData,
		private readonly idMap: Record<string, UV>,
	) {
		this.part = 16 / img.width
	}

	public getTextureAtlas() {
		return this.img
	}

	public getTextureUV(id: string) {
		return this.idMap[id] ?? [0, 0, this.part, this.part]
	}

	public static async fromBlobs(textures: { [id: string]: Blob }): Promise<TextureAtlas> {   
		const initialWidth = Math.sqrt(Object.keys(textures).length + 1)
		const width = Math.pow(2, Math.ceil(Math.log(initialWidth)/Math.log(2)))
		const pixelWidth = width * 16
		const part = 1 / width

		const canvas = document.createElement('canvas')
		canvas.width = pixelWidth
		canvas.height = pixelWidth
		const ctx = canvas.getContext('2d')!
		this.drawInvalidTexture(ctx)

		const idMap: Record<string, UV> = {}
		let index = 1
		await Promise.all(Object.keys(textures).map(async (id) => {
			const u = (index % width)
			const v = Math.floor(index / width)
			index += 1
			idMap[id] = [part * u, part * v, part * u + part, part * v + part]
			const img = await createImageBitmap(textures[id])
			ctx.drawImage(img, 0, 0, 16, 16, 16 * u, 16 * v, 16, 16)
		}))

		return new TextureAtlas(ctx.getImageData(0, 0, pixelWidth, pixelWidth), idMap)
	}

	public static empty() {
		const canvas = document.createElement('canvas')
		canvas.width = 16
		canvas.height = 16
		const ctx = canvas.getContext('2d')!
		TextureAtlas.drawInvalidTexture(ctx)
		return new TextureAtlas(ctx.getImageData(0, 0, 16, 16), {})
	}

	private static drawInvalidTexture(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = 'black'
		ctx.fillRect(0, 0, 16, 16)
		ctx.fillStyle = 'magenta'
		ctx.fillRect(0, 0, 8, 8)
		ctx.fillRect(8, 8, 8, 8)
	}
}
