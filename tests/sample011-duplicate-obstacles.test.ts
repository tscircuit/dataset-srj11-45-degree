import { expect, test } from "bun:test";
import fs from "node:fs";
import path from "node:path";
import { CircuitRunner } from "tscircuit";

type RectPad = {
	type?: string;
	shape?: string;
	layer?: string;
	x?: number;
	y?: number;
	width?: number;
	height?: number;
	ccw_rotation?: number;
};

type SimpleRouteObstacle = {
	type: string;
	layers: string[];
	center: { x: number; y: number };
	width: number;
	height: number;
	ccwRotationDegrees?: number;
	connectedTo?: string[];
};

const repoRoot = path.resolve(import.meta.dir, "..");

const geometryKey = ({
	layer,
	x,
	y,
	width,
	height,
	rotation,
}: {
	layer?: string;
	x?: number;
	y?: number;
	width?: number;
	height?: number;
	rotation?: number;
}) => [layer, x, y, width, height, rotation].join(":");

const duplicateKeys = (keys: string[]) => {
	const seen = new Set<string>();
	const duplicates = new Set<string>();
	for (const key of keys) {
		if (seen.has(key)) duplicates.add(key);
		seen.add(key);
	}
	return Array.from(duplicates);
};

test("sample011 has no duplicate same-layer obstacle pads", async () => {
	const runner = new CircuitRunner({
		platform: { drcChecksDisabled: true, routingDisabled: true },
	});
	await runner.executeWithFsMap({
		fsMap: {
			"tsconfig.json": fs.readFileSync(
				path.join(repoRoot, "tsconfig.json"),
				"utf8",
			),
			"circuits/common.tsx": fs.readFileSync(
				path.join(repoRoot, "circuits", "common.tsx"),
				"utf8",
			),
			"circuits/sample011.circuit.tsx": fs.readFileSync(
				path.join(repoRoot, "circuits", "sample011.circuit.tsx"),
				"utf8",
			),
		},
		mainComponentPath: "circuits/sample011.circuit.tsx",
	});
	await runner.renderUntilSettled();
	const circuitJson = (await runner.getCircuitJson()) as unknown as RectPad[];
	await runner.kill();

	const renderedDuplicates = duplicateKeys(
		circuitJson
			.filter((pad) => pad.type === "pcb_smtpad" && pad.shape === "rotated_rect")
			.map((pad) =>
				geometryKey({
					layer: pad.layer,
					x: pad.x,
					y: pad.y,
					width: pad.width,
					height: pad.height,
					rotation: pad.ccw_rotation,
				}),
			),
	);

	expect(renderedDuplicates).toEqual([]);

	const simpleRouteJson = JSON.parse(
		fs.readFileSync(
			path.join(repoRoot, "circuits", "sample011.circuit.simple-route.json"),
			"utf8",
		),
	) as { obstacles: SimpleRouteObstacle[] };
	const artifactKeys: string[] = [];
	for (const obstacle of simpleRouteJson.obstacles) {
		if ((obstacle.connectedTo ?? []).indexOf("source_trace_0") !== -1) continue;
		for (const layer of obstacle.layers) {
			artifactKeys.push(
				geometryKey({
					layer,
					x: obstacle.center.x,
					y: obstacle.center.y,
					width: obstacle.width,
					height: obstacle.height,
					rotation: obstacle.ccwRotationDegrees ?? 0,
				}),
			);
		}
	}
	const artifactDuplicates = duplicateKeys(artifactKeys);

	expect(artifactDuplicates).toEqual([]);
}, 30_000);
