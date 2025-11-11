import ExploreToolsRepo from "@/repository/business-hub/vip-lounge/innovation-vault/explore-tools/ExploreToolsRepo";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const repo = new ExploreToolsRepo(); // ✅ create an instance
        const tools = await repo.getAllTools(); // ✅ call method on instance
        console.log("Tools:", tools);
        if (!tools) return NextResponse.json({ success: false }, { status: 500 });
        return NextResponse.json(tools, { status: 200 });
    } catch (error) {
        console.error("API error processing GET request:", error);
    }
    return NextResponse.json({ success: true });
}