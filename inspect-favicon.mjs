import sharp from 'sharp';
import path from 'path';

const inputPath = path.join(process.cwd(), 'public', 'faviconkida.png.webp');

async function inspect() {
    try {
        const metadata = await sharp(inputPath).metadata();
        console.log('Metadata:', metadata);
    } catch (error) {
        console.error('Error:', error);
    }
}

inspect();
