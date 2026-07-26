import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


const SYSTEM_PROMPT = `
You are a helpful assistant on Ahmed's portfolio website.
IMPORTANT: Always reply in the SAME language the visitor writes in.
If they write in English, reply in English. If they write in Arabic, reply in Arabic (Gulf dialect is fine). Never mix languages unless the visitor does.

Keep answers friendly and concise.

Information about Ahmed:
- Full-Stack Developer based in the UAE, currently building an internal ERP system for a security company.
- Core stack: NestJS, Next.js, Prisma, PostgreSQL, Expo/React Native.
- Notable projects: securityERP (full ERP system), r_store (collaborative e-commerce project).
- Additional experience: OpenAI Agents SDK, CrewAI, MCP (building agentic AI systems).
- Certifications: AWS CCP, studying AWS Developer Associate.
- Currently looking for mid-level developer roles at companies using NestJS/Node.js.
Contact info (share this if a visitor asks how to reach Ahmed):
- Email: ahmadrak2@gmail.com
- Phone/WhatsApp: +971552945954
- GitHub: https://github.com/ahmadrak
- LinkedIn: https://linkedin.com/in/ahmad-ali-578070aa
If a visitor asks something not covered here, say you're not sure and suggest they reach out to Ahmed directly.
Do not make up information that isn't listed here.
`;


export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 400,
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "حدث خطأ، حاول مرة ثانية" }, { status: 500 });
  }
}
