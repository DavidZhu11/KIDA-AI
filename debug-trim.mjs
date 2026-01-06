import sharp from 'sharp';
import path from 'path';

const inputPath = path.join(process.cwd(), 'public', 'faviconkida.png.webp');

async function inspectTrim() {
    try {
        const image = sharp(inputPath);
        // getting metadata of the image after trim operations requires toBuffer() or similar usually, 
        // but running metadata() on a pipeline works in newer sharp versions?
        // Let's actually buffer it to be sure.
        const buffer = await image.trim().toBuffer();
        const metadata = await sharp(buffer).metadata();

        console.log('Original Header:', await image.metadata());
        console.log('Trimmed Dimensions:');
        console.log(`Width: ${metadata.width}`);
        console.log(`Height: ${metadata.height}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

inspectTrim();
