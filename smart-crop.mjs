import sharp from 'sharp';
import path from 'path';

const inputPath = path.join(process.cwd(), 'public', 'faviconkida.png.webp');
const debugPath = path.join(process.cwd(), 'public', 'debug-trimmed.png');
const outputPath = path.join(process.cwd(), 'public', 'favicon-square.png');

async function processImage() {
    try {
        // 1. Load and trim transparent whitespace
        // This will give us the bounding box of the actual content
        const image = sharp(inputPath);
        const trimmed = image.trim();

        const metadata = await trimmed.metadata();
        console.log('Trimmed metadata:', metadata);

        // 2. Identify the icon part
        // Assuming the logo is [Icon] [Text], the icon is the leftmost square-ish object.
        // If we trim, we might just get the whole thing tightly.
        // Let's assume the icon height defines the square size.

        // We want to create a square canvas that fits the icon.
        // Usually logo icons are roughly square.
        // Let's take the first 'height' pixels of width from the trimmed image.
        // But to be safe, let's look at the Trimmed contents.

        // Since I can't see, I'll assume the icon is at the start.
        // If the previous crop (left 0) cut it off, maybe the lotus is actually *centered* in the original image? 
        // Wait, width 593, height 85. If it's a full logo, it's likely left-aligned.

        // If the user said "cut out" and it was a 0-85 crop:
        // It implies the lotus is wider than 85px OR it starts further right.

        // Strategy:
        // 1. Save the TRIMMED image so we know the true start.
        // 2. Extract the left-most 'height' x 'height' square from the TRIMMED image.
        //    This handles any left-padding key.
        // 3. To prevent cutting off the right side (if lotus is wider than height),
        //    we can check if we should grab a bit more? 
        //    Actually, let's grab a square based on the HEIGHT of the trimmed image.

        const size = metadata.height; // This maintains aspect ratio logic if icon is square

        // Extract the left square of the trimmed image
        await trimmed
            .extract({ left: 0, top: 0, width: size, height: size })
            .toFormat('png')
            .toFile(outputPath);

        console.log(`Created new cropped favicon at ${outputPath} with size ${size}x${size}`);

    } catch (error) {
        console.error('Error processing image:', error);
    }
}

processImage();
