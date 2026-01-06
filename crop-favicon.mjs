import sharp from 'sharp';
import path from 'path';

const inputPath = path.join(process.cwd(), 'public', 'faviconkida.png.webp');
const outputPath = path.join(process.cwd(), 'public', 'favicon-square.png');

async function processImage() {
    try {
        // Get metadata to confirm dimensions
        const metadata = await sharp(inputPath).metadata();
        const height = metadata.height; // 85

        // Assume the icon is the square on the left matching the height
        // Crop a square from the left: 0,0 with width=height, height=height
        await sharp(inputPath)
            .extract({ left: 0, top: 0, width: height, height: height })
            .toFormat('png')
            .toFile(outputPath);

        console.log(`Created square favicon at ${outputPath}`);
    } catch (error) {
        console.error('Error processing image:', error);
    }
}

processImage();
