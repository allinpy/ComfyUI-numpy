export const defaultGraph = {
	last_node_id: 2,
	last_link_id: 1,
	nodes: [
		{
			id: 2,
			type: "PreviewImage",
			pos: [520, 284],
			size: { 0: 210, 1: 246 },
			flags: {},
			order: 1,
			mode: 0,
			inputs: [{ name: "images", type: "IMAGE", link: 1 }],
			properties: {"Node name for S&R": "PreviewImage"},
		},
		{
			id: 1,
			type: "LoadImage",
			pos: [108, 268],
			size: { 0: 315, 1: 315 },
			flags: {},
			order: 0,
			mode: 0,
			outputs: [
			    { name: "IMAGE", type: "IMAGE", links: [1], shape: 3, slot_index: 0 },
			    { name: "MASK", type: "MASK", links: null, shape: 3},
			],
			properties: {"Node name for S&R": "LoadImage"},
            widgets_values: ["example.png", "image"]
		},
	],
	links: [
		[1, 1, 0, 2, 0, "IMAGE"]
	],
	groups: [],
	config: {},
	extra: {},
	version: 0.4,
};
