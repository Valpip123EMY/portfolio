#!/bin/bash

# Portfolio Deployment Script
# This script helps deploy the portfolio to various platforms

echo "🚀 Portfolio Deployment Script"
echo "==============================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run type check
echo "🔍 Running type check..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ Type check failed. Please fix TypeScript errors."
    exit 1
fi

# Run linter
echo "🧹 Running linter..."
npm run lint
if [ $? -ne 0 ]; then
    echo "⚠️  Linting issues found. Consider fixing them."
fi

# Build the project
echo "🏗️  Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors."
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "🌐 Deployment Options:"
echo "1. Vercel (Recommended):"
echo "   - Go to https://vercel.com"
echo "   - Connect your GitHub repository"
echo "   - Deploy automatically"
echo ""
echo "2. Netlify:"
echo "   - Go to https://netlify.com"
echo "   - Drag and drop the .next folder"
echo "   - Or connect your GitHub repository"
echo ""
echo "3. Manual server deployment:"
echo "   - Upload the .next folder to your server"
echo "   - Run 'npm start' on your server"
echo ""
echo "✨ Your portfolio is ready for deployment!"