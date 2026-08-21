import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

const PORT = 8086;
const CSS_DELAY = 10000;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const server = http.createServer(async (req, res) => {
  const requestStart = performance.now();

  console.log(
    `\n[REQUEST] ${req.method} ${req.url}`
  );

  try {
    const pathname = new URL(
      req.url,
      `http://${req.headers.host}`
    ).pathname;

    const relativePath =
      pathname === "/"
        ? "index.html"
        : pathname.replace(/^\/+/, "");

    const filePath = path.join(
      rootDir,
      relativePath
    );

    const resolvedPath = path.resolve(filePath);

    if (
      !resolvedPath.startsWith(
        path.resolve(rootDir)
      )
    ) {
      res.writeHead(403, {
        "Content-Type": "text/plain; charset=utf-8",
      });

      res.end("Forbidden");

      return;
    }

    const extension = path.extname(resolvedPath);

    const contentType =
      contentTypes[extension] ||
      "application/octet-stream";

    if (pathname === "/output.css" || pathname === "/code/output.css") {
      console.log(
        `[CSS] Request received. Delaying response by ${CSS_DELAY}ms...`
      );

      const cssDelayStart = performance.now();

      await sleep(CSS_DELAY);

      const cssDelayEnd = performance.now();

      console.log(
        `[CSS] Delay finished after ${Math.round(
          cssDelayEnd - cssDelayStart
        )}ms`
      );

      console.log("[CSS] Sending output.css...");
    }

    const content = await fs.readFile(
      resolvedPath
    );

    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-store",
    });

    res.end(content);

    const requestEnd = performance.now();

    console.log(
      `[RESPONSE] ${pathname} → 200 (${Math.round(
        requestEnd - requestStart
      )}ms)`
    );
  } catch (error) {
    console.error(
      `[ERROR] ${req.method} ${req.url}`,
      error
    );

    res.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
    });

    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(
    `\n🚀 Critical CSS Lab server running at:`
  );

  console.log(
    `   http://localhost:${PORT}`
  );

  console.log(
    `\n🧪 CSS experiment:`
  );

  console.log(
    `   output.css delay = ${CSS_DELAY}ms`
  );

  console.log(
    `\n📁 Serving:`
  );

  console.log(
    `   ${rootDir}`
  );
});
