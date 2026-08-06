import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        },
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "naveenkr2209@gmail.com",
      replyTo: email,
      subject: `📩 ${subject}`,
      html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:720px;margin:auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">

    <div style="padding:28px;">
      <h1 style="margin:0;font-size:22px;font-weight:700;color:#111827;">
        Portfolio Contact
      </h1>

      <p style="margin:0px 0 0;font-size:14px;line-height:1.6;color:#6b7280;">
        You have received a new message from your portfolio contact form.
      </p>
    </div>

    <hr style="margin:0;border:none;border-top:1px solid #e5e7eb;">

    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="padding:12px 28px;font-size:12px;font-weight:600;color:#111827;width:170px;">
          Name
        </td>

        <td style="padding:12px 28px;font-size:12px;color:#111827;">
          ${name}
        </td>
      </tr>

      <tr style="border-top:1px solid #e5e7eb;">
        <td style="padding:12px 28px;font-size:12px;font-weight:600;color:#111827;">
          Email
        </td>

        <td style="padding:12px 28px;font-size:12px;">
          <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
            ${email}
          </a>
        </td>
      </tr>

      <tr style="border-top:1px solid #e5e7eb;">
        <td style="padding:12px 28px;font-size:12px;font-weight:600;color:#111827;">
          Subject
        </td>

        <td style="padding:12px 28px;font-size:12px;color:#111827;">
          ${subject}
        </td>
      </tr>
    </table>

    <hr style="margin:0;border:none;border-top:1px solid #e5e7eb;">

    <div style="padding:12px 28px;">
      <h3 style="margin:0 0 14px;font-size:12px;font-weight:600;color:#111827;">
        Message
      </h3>

      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:8px;">
        <p style="margin:0;font-size:12px;color:#374151;white-space:pre-wrap;">
          ${message}
        </p>
      </div>
    </div>

    <hr style="margin:0;border:none;border-top:1px solid #e5e7eb;">

    <div style="padding:18px 28px;">
      <p style="margin:0;font-size:12px;color:#6b7280;">
        This email was sent from your portfolio contact form.
      </p>
    </div>

    <div style="border-top:1px solid #e5e7eb;background:#fafafa;padding:28px;text-align:center;">
      <p style="margin:0;font-size:12px;color:#6b7280;">
        © ${new Date().getFullYear()}
        <a href="https://naveenkr123.vercel.app" style="color:#2563eb;text-decoration:none;">
          Naveen Kumar Portfolio
        </a>.
        All rights reserved.
      </p>

      <p style="margin:8px 0 0;font-size:12px;color:#9ca3af;">
        Please do not reply to this email.
      </p>
    </div>

  </div>
</div>
`,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
