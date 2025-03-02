import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from 'next/server';
import { Utility } from '@/core/helpers/utility'

const geminiApiKey = process.env.SERVER_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(geminiApiKey);

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formData = await req.formData();
        
        const prompt = formData.get('prompt') as string;

        if (!prompt) {
            return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
        }

        // Use Gemini API to analyze PDF
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-pro-exp-02-05" });
        const result = await model.generateContent(prompt);

        if (!result || !result.response) {
            return NextResponse.json({ error: "No response from Gemini" }, { status: 500 });
        }

        const response = await result.response;
        try {
            const clauses = JSON.parse(Utility.removeJsonTags(response.text()));
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
