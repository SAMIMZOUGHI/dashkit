// =============================================================================
// FICHIER : lib/email.ts
// RÔLE : Envoi d'emails avec Resend
// =============================================================================

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendPurchaseEmailParams {
  to: string;
  customerName?: string;
  productName: string;
  downloadUrl: string;
  orderReference: string;
}

export async function sendPurchaseEmail({
  to,
  customerName,
  productName,
  downloadUrl,
  orderReference,
}: SendPurchaseEmailParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: "DashKit <hello@dashkit.online>", // Change avec ton domaine vérifié
      to: [to],
      subject: `🎉 Votre achat : ${productName}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 40px 30px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Merci pour votre achat !</h1>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <p style="font-size: 16px; color: #3f3f46; margin: 0 0 20px;">
        Bonjour${customerName ? ` ${customerName}` : ""} !
      </p>
      
      <p style="font-size: 16px; color: #3f3f46; margin: 0 0 30px;">
        Votre achat de <strong>${productName}</strong> a été confirmé. Vous pouvez maintenant télécharger votre template.
      </p>
      
      <!-- Download Button -->
      <div style="text-align: center; margin: 40px 0;">
        <a href="${downloadUrl}" 
           style="display: inline-block; background: #18181b; color: white; padding: 16px 32px; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 8px;">
          📥 Télécharger mon template
        </a>
      </div>
      
      <!-- Order Details -->
      <div style="background: #f4f4f5; border-radius: 8px; padding: 20px; margin: 30px 0;">
        <h3 style="margin: 0 0 15px; color: #18181b; font-size: 14px; text-transform: uppercase;">Détails de la commande</h3>
        <p style="margin: 5px 0; color: #52525b; font-size: 14px;">
          <strong>Produit :</strong> ${productName}
        </p>
        <p style="margin: 5px 0; color: #52525b; font-size: 14px;">
          <strong>Référence :</strong> ${orderReference}
        </p>
      </div>
      
      <!-- Help -->
      <p style="font-size: 14px; color: #71717a; margin: 30px 0 0;">
        Un problème ? Répondez simplement à cet email, nous vous aiderons rapidement.
      </p>
    </div>
    
    <!-- Footer -->
    <div style="background: #f4f4f5; padding: 20px 30px; text-align: center;">
      <p style="margin: 0; color: #71717a; font-size: 12px;">
        © 2024 DashKit. Tous droits réservés.
      </p>
    </div>
    
  </div>
</body>
</html>
      `,
    });

    if (error) {
      console.error("❌ Erreur envoi email:", error);
      return { success: false, error };
    }

    console.log("✅ Email envoyé:", data?.id);
    return { success: true, data };
  } catch (error) {
    console.error("❌ Erreur envoi email:", error);
    return { success: false, error };
  }
}