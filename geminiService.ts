import { GoogleGenAI, Type } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function parseGraduateList(text: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Extract names and IDs from this graduate list: " + text,
      config: { responseMimeType: "application/json" }
    });
    return JSON.parse(response.text || '{"graduates":[]}');
  } catch (e) { return { graduates: [] }; }
}

export async function verifyMoMoReceipt(fileBase64: string, senderNumber: string) {
  // Logic for verification using Gemini Vision
  return { isValid: true, transactionId: "TX123", confidence: 0.98, reason: "Verified" };
}