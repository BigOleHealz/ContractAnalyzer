export const maxDuration = 180;

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from 'next/server';
import { Utility } from '@/core/helpers/utility';

const geminiApiKey = process.env.SERVER_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(geminiApiKey);

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const file = formData.get('file') as File;
        const prompt = formData.get('prompt') as string;

        if (!file || !prompt) {
            return NextResponse.json({ error: "Missing file or prompt" }, { status: 400 });
        }

        const fileBuffer = Buffer.from(await file.arrayBuffer());

        // Convert file to Base64 for Gemini API
        const pdfBase64 = fileBuffer.toString("base64");
        const payloadSize = Buffer.byteLength(pdfBase64, 'base64');

        // Use Gemini API to analyze PDF
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-pro-exp-02-05" });

        const promptPart = {
            text: prompt,
        };

        const imagePart = {
            inlineData: {
                mimeType: file.type,
                data: pdfBase64,
            },
        };

        const result = await model.generateContent({
            contents: [{
                role: "user",
                parts: [promptPart, imagePart],
            }],
        });

        const response = await result.response;
        const text = response.text();
        const textWithoutTags = Utility.removeJsonTags(text);
        try {
            const clauses = JSON.parse(textWithoutTags);
            return NextResponse.json({ clauses }, { status: 200 });
        } catch (parseError) {
            console.error("Error parsing clauses to JSON:", parseError);
            return NextResponse.json({ error: 'Invalid JSON format in clauses', message: parseError.message }, { status: 500 });
        }
    } catch (error) {
        console.error("Error uploading file:", error);
        return NextResponse.json({ error: 'Failed to upload file', message: (error as Error).message }, { status: 500 });
    }
}
