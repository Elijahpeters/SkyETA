import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("public interface presents the engine simply as SkyETA", async () => {
  const [demo, page, layout] = await Promise.all([
    readFile(new URL("app/components/SkyetaDemo.tsx", root), "utf8"),
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
  ]);

  assert.match(demo, /Loading SkyETA/);
  assert.match(demo, /SkyETA ready/);
  assert.match(demo, /SkyETA-generated summary/);
  assert.match(demo, /Prepared by SkyETA/);
  assert.match(demo, /Schedule explorer/);
  assert.match(demo, /Nearby time comparison/);
  assert.match(page, /<dt>Engine<\/dt>\s*<dd>SkyETA<\/dd>/);
  assert.match(page, /SkyETA runs privately in your/);

  for (const oldPublicPhrase of [
    /Model ready/i,
    /LightGBM model/i,
    /Loading Model/i,
    /Model Unavailable/i,
    /loaded model/i,
    /deterministic model-generated/i,
    /historical evidence/i,
    /testimonials/i,
    /invented live data/i,
    /Parity passed/i,
    /Browser fixture check/i,
    /model-only/i,
    /Hypothetical model/i,
    /interactive model is temporarily unavailable/i,
  ]) {
    assert.doesNotMatch(demo, oldPublicPhrase);
  }

  assert.doesNotMatch(page, /LightGBM|Local ML|<dt>Model<\/dt>/i);
  assert.doesNotMatch(layout, /LightGBM|flight-delay model/i);
});
