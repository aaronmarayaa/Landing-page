import test from "node:test";
import assert from "node:assert/strict";
import { sendContactInquiry } from "../src/lib/contactInquiry.ts";

function inquiryFields() {
  const fields = new FormData();
  fields.set("firstName", "Client");
  fields.set("lastName", "Inquiry");
  fields.set("email", "client@example.test");
  fields.set("phoneCountry", "Canada (+1)");
  fields.set("phone", "5550100");
  fields.set("message", "A customer portal with booking and reporting.");
  return fields;
}

test("custom inquiries copy the clients inbox with the plan and complete project details", async () => {
  let request;
  await sendContactInquiry(inquiryFields(), true, true, async (url, options) => {
    request = { url, ...options, payload: JSON.parse(options.body) };
    return Response.json({ success: "true" });
  });

  assert.equal(request.url, "https://formsubmit.co/ajax/ascendlogix.ca@gmail.com");
  assert.equal(request.method, "POST");
  assert.deepEqual(request.payload, {
    _subject: "New Ascend Logix Custom Plan Inquiry",
    _template: "table",
    _cc: "ascendlogix.clients@gmail.com",
    plan: "Custom",
    first_name: "Client",
    last_name: "Inquiry",
    phone_country: "Canada (+1)",
    email: "client@example.test",
    phone_number: "5550100",
    message: "A customer portal with booking and reporting.",
  });
});

test("general inquiries retain their existing destination and do not copy the custom inbox", async () => {
  const fields = inquiryFields();
  fields.set("_cc", "unrequested@example.test");
  fields.set("plan", "Custom");
  let payload;

  await sendContactInquiry(fields, true, false, async (_url, options) => {
    payload = JSON.parse(options.body);
    return Response.json({ success: true });
  });

  assert.equal(payload._subject, "New Ascend Logix Website Inquiry");
  assert.equal(payload.first_name, "Client");
  assert.equal(payload.email, "client@example.test");
  assert.equal("_cc" in payload, false);
  assert.equal("plan" in payload, false);
});

test("the compact homepage form keeps its name, city, and contact fields", async () => {
  const fields = inquiryFields();
  fields.set("name", "Client Inquiry");
  fields.set("city", "Project location");
  let payload;

  await sendContactInquiry(fields, false, false, async (_url, options) => {
    payload = JSON.parse(options.body);
    return Response.json({ success: true });
  });

  assert.equal(payload.name, "Client Inquiry");
  assert.equal(payload.city, "Project location");
  assert.equal(payload.phone_number, "5550100");
  assert.equal("first_name" in payload, false);
  assert.equal("_cc" in payload, false);
});

test("HTTP errors and provider rejections cannot report a successful submission", async () => {
  const failures = [
    () => Response.json({ success: false }, { status: 500 }),
    () => Response.json({ success: false }),
    () => Response.json({ success: "false" }),
    () => Response.json({ message: "Not accepted" }),
    () => new Response("Not JSON"),
  ];

  for (const response of failures) {
    await assert.rejects(() =>
      sendContactInquiry(inquiryFields(), true, true, async () => response()),
    );
  }
});

test("network failures propagate to the form's retry state", async () => {
  await assert.rejects(
    () => sendContactInquiry(inquiryFields(), true, true, async () => {
      throw new TypeError("Network unavailable");
    }),
    /Network unavailable/,
  );
});
