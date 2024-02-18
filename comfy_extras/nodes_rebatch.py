import torch

class ImageRebatch:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": { "images": ("IMAGE",),
                              "batch_size": ("INT", {"default": 1, "min": 1, "max": 4096}),
                              }}
    RETURN_TYPES = ("IMAGE",)
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True, )

    FUNCTION = "rebatch"

    CATEGORY = "image/batch"

    def rebatch(self, images, batch_size):
        batch_size = batch_size[0]

        output_list = []
        all_images = []
        for img in images:
            for i in range(img.shape[0]):
                all_images.append(img[i:i+1])

        for i in range(0, len(all_images), batch_size):
            output_list.append(torch.cat(all_images[i:i+batch_size], dim=0))

        return (output_list,)

NODE_CLASS_MAPPINGS = {
    "RebatchImages": ImageRebatch,
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "RebatchImages": "Rebatch Images",
}
