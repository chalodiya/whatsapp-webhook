if (req.method === "POST") {
  console.log("WHATSAPP EVENT RECEIVED");
  console.log(JSON.stringify(req.body));

  const MAKE_WEBHOOK_URL =
    "https://hook.eu1.make.com/3nitf6249jnqcoracs58a2p2jxdbj1a7";

  await fetch(MAKE_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  });

  return res.status(200).json({ success: true });
}
