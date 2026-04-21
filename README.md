# dataset-srj11-45-degree
45 Degree Autorouting Problem Dataset (validates an autorouter has good 45-degree obstacle support)

This repo is now scaffolded as a regular `tscircuit` project with the first ten
single-net obstacle samples under `circuits/`. Each sample uses two
`<testpoint />` endpoints and one routed trace, with rotated custom-footprint
chips acting as the blocking geometry.

Current samples:

- `sample001`: wide rising tunnel between two diamond pads
- `sample002`: wide falling tunnel between two diamond pads
- `sample003`: narrower rising diamond tunnel
- `sample004`: narrower falling diamond tunnel
- `sample005`: asymmetric rising diamond tunnel with a larger entry obstacle
- `sample006`: asymmetric falling diamond tunnel with mirrored obstacle sizes
- `sample007`: wide tunnel between two tilted rectangular pads
- `sample008`: mirrored tilted-pad tunnel
- `sample009`: two diamond tunnels in sequence
- `sample010`: narrower rising tunnel between two tilted rectangular pads

Usage:

- `bun install`
- `bun run build`
- `tsci build circuits/sample001.circuit.tsx`
