import sharp from 'sharp';
import path from 'path';

const inputPath = path.join(process.cwd(), 'public', 'faviconkida.png.webp');
const outputPath = path.join(process.cwd(), 'public', 'favicon-square.png');

async function processImage() {
    try {
        // 1. Trim to get the content bounding box (the lotus)
        const image = sharp(inputPath);
        const buffer = await image.trim().toBuffer();
        const trimmed = sharp(buffer);
        const metadata = await trimmed.metadata();

        const width = metadata.width;
        const height = metadata.height;

        console.log(`Trimmed size: ${width}x${height}`);

        // 2. Determine base square size from the content
        const contentSize = Math.max(width, height);

        // 3. Add MINIMAL padding (5% instead of 20%)
        // This prevents cutting off anti-aliased edges/glow but keeps it BIG.
        const padding = Math.max(2, Math.round(contentSize * 0.05));
        const canvasSize = contentSize + (padding * 2);

        console.log(`Canvas size: ${canvasSize}x${canvasSize} (Padding: ${padding}px)`);

        // 4. Create transparent canvas and center the trimmed content
        await sharp({
            create: {
                width: canvasSize,
                height: canvasSize,
                channels: 4,
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            }
        })
            .composite([
                {
                    input: buffer,
                    gravity: 'center'
                }
            ])
            .toFormat('png')
            .toFile(outputPath);

        console.log(`Created minimal-padding favicon at ${outputPath}`);

    } catch (error) {
        console.error('Error processing image:', error);
    }
}

processImage();
