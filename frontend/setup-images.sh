#!/bin/bash

# DADS Program Image Setup Script
# Run this script after adding the image files to properly update the website

echo "🏠 DADS Program Image Setup"
echo "================================"

echo "📁 Checking images directory..."
if [ -d "/app/frontend/public/images" ]; then
    echo "✅ Images directory exists"
else
    echo "❌ Images directory not found, creating..."
    mkdir -p /app/frontend/public/images
fi

echo ""
echo "🔍 Looking for required images..."

# Check for DADS logo
if [ -f "/app/frontend/public/images/dads-logo.png" ]; then
    echo "✅ DADS logo found: dads-logo.png"
else
    echo "❌ DADS logo missing: dads-logo.png"
    echo "   Please add the DADS logo as 'dads-logo.png'"
fi

# Check for Dr. LaCon photo 1
if [ -f "/app/frontend/public/images/dr-lisa-lacon-1.jpg" ]; then
    echo "✅ Dr. LaCon photo 1 found: dr-lisa-lacon-1.jpg"
else
    echo "❌ Dr. LaCon photo 1 missing: dr-lisa-lacon-1.jpg"
    echo "   Please add Dr. LaCon's main photo as 'dr-lisa-lacon-1.jpg'"
fi

# Check for Dr. LaCon photo 2
if [ -f "/app/frontend/public/images/dr-lisa-lacon-2.jpg" ]; then
    echo "✅ Dr. LaCon photo 2 found: dr-lisa-lacon-2.jpg"
else
    echo "❌ Dr. LaCon photo 2 missing: dr-lisa-lacon-2.jpg"
    echo "   Please add Dr. LaCon's speaking photo as 'dr-lisa-lacon-2.jpg'"
fi

echo ""
echo "📋 INSTRUCTIONS:"
echo "1. Save the DADS logo as: /app/frontend/public/images/dads-logo.png"
echo "2. Save Dr. LaCon's headshot as: /app/frontend/public/images/dr-lisa-lacon-1.jpg"
echo "3. Save Dr. LaCon's speaking photo as: /app/frontend/public/images/dr-lisa-lacon-2.jpg"
echo "4. The website will automatically display these images"
echo ""
echo "🌟 The website is already configured to use these images!"
echo "   Just add the files and refresh the page."

# Restart frontend to ensure changes take effect
echo ""
echo "🔄 Restarting frontend service..."
sudo supervisorctl restart frontend

echo "✅ Setup complete! Add your images and refresh the website."