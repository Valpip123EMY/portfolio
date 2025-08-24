import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the PDF from its current location in the repo
    const pdfPath = path.join(process.cwd(), 'src', 'components', 'pages', 'resume1.pdf');
    const data = await fs.readFile(pdfPath);
    
    return new NextResponse(Buffer.from(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Valmik_Nahata_Resume.pdf"',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving resume PDF:', error);
    return new NextResponse('Resume not found', { status: 404 });
  }
}
