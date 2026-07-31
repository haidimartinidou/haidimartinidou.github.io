// Renders the live /cv/ page to assets/cv/Haidi_Martinidou_CV.pdf.
// Invoked by .github/workflows/cv-pdf.yml against a locally served build
// of the site. Do not run this against production unless CV_URL is set.
const puppeteer = require("puppeteer");

const url = process.env.CV_URL || "http://localhost:4000/cv/";
const outPath = process.env.CV_PDF_PATH || "assets/cv/Haidi_Martinidou_CV.pdf";

(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    await page.emulateMediaType("print");
    await page.pdf({
      path: outPath,
      format: "A4",
      printBackground: true,
      margin: { top: "13mm", bottom: "13mm", left: "14mm", right: "14mm" },
    });
  } finally {
    await browser.close();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
