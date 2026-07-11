export async function POST(req: Request) {
  try {
    const body = await req.json();

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      return Response.json(
        {
          success: false,
          error: "Missing GOOGLE_SCRIPT_URL environment variable.",
        },
        { status: 500 }
      );
    }

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    const text = await response.text();

    try {
      return Response.json(JSON.parse(text));
    } catch {
      return Response.json(
        {
          success: false,
          error: "Google Apps Script did not return valid JSON.",
          raw: text,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}