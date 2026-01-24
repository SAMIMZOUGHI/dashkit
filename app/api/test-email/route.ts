import { NextResponse } from "next/server";
import { sendPurchaseEmail } from "@/lib/email";

export async function GET() {
  const result = await sendPurchaseEmail({
    to: "sami.mzoughi@efap.com",  // ⬅️ METS TON EMAIL ICI
    customerName: "Test",
    productName: "Lookze Pro",
    downloadUrl: "https://dashkit.online/dashboard",
    orderReference: "TEST123",
  });

  return NextResponse.json(result);
}