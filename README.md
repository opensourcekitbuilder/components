# components

Licensed runtime component bundles, loaded by a host application at runtime.
Served with GitHub Pages at https://opensourcekitbuilder.github.io/components/.

The bundles do nothing on their own: the loader runs one only after a valid, signed licence reply,
and only if its bytes match the SHA-384 fingerprint in the licence manifest.

## Rules

- **Released folders are never changed or deleted.** A changed file no longer matches its fingerprint
  and is rejected by every browser. Ship a fix as a new version folder.
- Releasing: add `v<next>/`, push, wait for Pages to deploy, check the URLs load, then paste
  `v<next>/manifest.json` into the licence server's admin (Licences → the licensee → Manifest).
- Rolling back: paste an older version's `manifest.json` into the admin. No upload needed.

## Versions

- `v1.0.0/`

## v1.0.0

| Component | File | Size |
|---|---|---|
| slide-canvas | slide-canvas.6977e37ff552.js | 39 KB |
| pitch-slides-overview | pitch-slides-overview.9b36e2fc1268.js | 89 KB |
| standard-texts-table | standard-texts-table.d22975c54c92.js | 113 KB |
| templates-table | templates-table.0f91157272a0.js | 106 KB |
| import-template-modal | import-template-modal.c378d11ac779.js | 106 KB |
| template-editor | template-editor.779322bb4cc4.js | 418 KB |
| slide-editor | slide-editor.ad63d20b3d5a.js | 790 KB |
