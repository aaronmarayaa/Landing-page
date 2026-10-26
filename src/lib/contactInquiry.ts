export async function sendContactInquiry(
  formData: FormData,
  showForm: boolean,
  customInquiry: boolean,
  send: typeof fetch = fetch,
) {
  const payload = {
    _subject: customInquiry
      ? "New Ascend Logix Custom Plan Inquiry"
      : "New Ascend Logix Website Inquiry",
    _template: "table",
    ...(customInquiry
      ? { _cc: "ascendlogix.clients@gmail.com", plan: "Custom" }
      : {}),
    ...(showForm
      ? {
          first_name: String(formData.get("firstName") || ""),
          last_name: String(formData.get("lastName") || ""),
          phone_country: String(formData.get("phoneCountry") || ""),
        }
      : {
          name: String(formData.get("name") || ""),
          city: String(formData.get("city") || ""),
        }),
    email: String(formData.get("email") || ""),
    phone_number: String(formData.get("phone") || ""),
    message: String(formData.get("message") || ""),
  };

  const response = await send(
    "https://formsubmit.co/ajax/ascendlogix.ca@gmail.com",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    throw new Error("Message could not be submitted.");
  }

  const result: { success?: boolean | string } = await response.json();
  if (result?.success !== true && result?.success !== "true") {
    throw new Error("Message was not accepted.");
  }
}
