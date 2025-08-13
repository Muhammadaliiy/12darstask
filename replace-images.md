# 📸 How to Replace Images

The application currently uses placeholder SVG images. To use your own dessert images, follow these steps:

## 🗂️ Required Image Files

Place your images in the `public/images/` folder with these exact filenames:

### Waffle with Berries
- `image-waffle-desktop.jpg` (300x240px recommended)
- `image-waffle-tablet.jpg` (250x200px recommended)
- `image-waffle-mobile.jpg` (200x160px recommended)
- `image-waffle-thumbnail.jpg` (48x48px recommended)

### Vanilla Bean Crème Brûlée
- `image-creme-brulee-desktop.jpg`
- `image-creme-brulee-tablet.jpg`
- `image-creme-brulee-mobile.jpg`
- `image-creme-brulee-thumbnail.jpg`

### Macaron Mix of Five
- `image-macaron-desktop.jpg`
- `image-macaron-tablet.jpg`
- `image-macaron-mobile.jpg`
- `image-macaron-thumbnail.jpg`

### Classic Tiramisu
- `image-tiramisu-desktop.jpg`
- `image-tiramisu-tablet.jpg`
- `image-tiramisu-mobile.jpg`
- `image-tiramisu-thumbnail.jpg`

### Pistachio Baklava
- `image-baklava-desktop.jpg`
- `image-baklava-tablet.jpg`
- `image-baklava-mobile.jpg`
- `image-baklava-thumbnail.jpg`

### Lemon Meringue Pie
- `image-meringue-desktop.jpg`
- `image-meringue-tablet.jpg`
- `image-meringue-mobile.jpg`
- `image-meringue-thumbnail.jpg`

### Red Velvet Cake
- `image-cake-desktop.jpg`
- `image-cake-tablet.jpg`
- `image-cake-mobile.jpg`
- `image-cake-thumbnail.jpg`

### Salted Caramel Brownie
- `image-brownie-desktop.jpg`
- `image-brownie-tablet.jpg`
- `image-brownie-mobile.jpg`
- `image-brownie-thumbnail.jpg`

### Vanilla Panna Cotta
- `image-panna-cotta-desktop.jpg`
- `image-panna-cotta-tablet.jpg`
- `image-panna-cotta-mobile.jpg`
- `image-panna-cotta-thumbnail.jpg`

## 📐 Recommended Image Sizes

- **Desktop**: 300x240px (4:3 aspect ratio)
- **Tablet**: 250x200px (5:4 aspect ratio)
- **Mobile**: 200x160px (5:4 aspect ratio)
- **Thumbnail**: 48x48px (1:1 aspect ratio)

## 🛠️ Quick Setup

If you have one high-quality image per dessert, you can:

1. Name your image files with the base name (e.g., `waffle.jpg`)
2. Use this command to create all variants:

```bash
# Example for waffle image
cp waffle.jpg public/images/image-waffle-desktop.jpg
cp waffle.jpg public/images/image-waffle-tablet.jpg
cp waffle.jpg public/images/image-waffle-mobile.jpg
cp waffle.jpg public/images/image-waffle-thumbnail.jpg
```

## 🔄 Supported Formats

The application supports:
- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.svg`

## 🎯 Tips

1. **Optimize your images** for web (compress them to reduce file size)
2. **Use consistent aspect ratios** for better visual alignment
3. **Test on different screen sizes** to ensure images look good everywhere
4. **Use descriptive alt text** (automatically generated from product names)

## 🚨 Troubleshooting

If images don't appear:
1. Check that filenames match exactly (case-sensitive)
2. Ensure images are in the correct `/public/images/` directory
3. Clear browser cache and refresh
4. Check browser developer tools for 404 errors

The application will automatically fall back to text placeholders if images fail to load.