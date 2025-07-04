/**
 * @Author: Adithya
 * @Date:   2025-06-04
 * @Last Modified by:   Adithya
 * @Last Modified time: 2025-06-04
 */
import { NextResponse } from "next/server"
import { MistralAgent } from "@/lib/mistral-agent"

const agent = new MistralAgent(process.env.MISTRAL_API_KEY || "6TcdJZMB27yANAbVT3MBpQvp5iPR97vZ")

export async function GET() {
  return NextResponse.json(agent.getAgentInfo())
}
