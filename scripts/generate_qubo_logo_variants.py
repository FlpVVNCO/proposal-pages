from pathlib import Path
from PIL import Image


SRC = Path("public/brand/qubo-logo-dark.png")
DARK_OUT = Path("public/brand/qubo-logo-dark.png")
LIGHT_OUT = Path("public/brand/qubo-logo-light.png")


def is_background(r: int, g: int, b: int) -> bool:
    mx = max(r, g, b)
    mn = min(r, g, b)
    # Checkerboard-like background pixels are near neutral whites/greys.
    return mx > 165 and (mx - mn) < 26


def main() -> None:
    img = Image.open(SRC).convert("RGBA")
    pixels = img.load()
    w, h = img.size

    dark = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    light = Image.new("RGBA", (w, h), (0, 0, 0, 0))

    dark_px = dark.load()
    light_px = light.load()

    for y in range(h):
        for x in range(w):
            r, g, b, _ = pixels[x, y]

            if is_background(r, g, b):
                continue

            # Keep original logo tonality for dark variant.
            dark_px[x, y] = (r, g, b, 255)

            # Light variant keeps exact silhouette while recoloring.
            # We preserve some depth using source luminance.
            luma = (0.299 * r + 0.587 * g + 0.114 * b) / 255.0
            shade = int(210 + (245 - 210) * luma)
            light_px[x, y] = (shade, shade - 4, 255, 255)

    dark.save(DARK_OUT)
    light.save(LIGHT_OUT)


if __name__ == "__main__":
    main()

