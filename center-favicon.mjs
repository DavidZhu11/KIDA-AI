import sharp from 'sharp';
import path from 'path';

const inputPath = path.join(process.cwd(), 'public', 'faviconkida.png.webp');
const outputPath = path.join(process.cwd(), 'public', 'favicon-square.png');

async function processImage() {
    try {
        // 1. Trim to get the content bounding box
        const image = sharp(inputPath);
        const buffer = await image.trim().toBuffer();
        const trimmed = sharp(buffer);
        const metadata = await trimmed.metadata();

        const width = metadata.width;
        const height = metadata.height;

        console.log(`Trimmed size: ${width}x${height}`);

        // 2. Determine square size
        const size = Math.max(width, height);

        // 3. Create a transparent square canvas and composite the trimmed image in the center
        await sharp({
            create: {
                width: size,
                height: size,
                channels: 4,
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            }
        })
            .composite([
                {
                    input: buffer,
                    gravity: 'center' // sharp handles centering automatically
                }
            ])
            .toFormat('png')
            .toFile(outputPath);

        console.log(`Created centered square favicon at ${outputPath} (${size}x${size})`);

    } catch (error) {
        console.error('Error processing image:', error);
    }
}

processImage();
