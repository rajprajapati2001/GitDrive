#!/bin/bash

# Define Theme Colors (Matching your portfolio brand)
DARK_RED='\033[0;31m'     # #CF0B17 equivalent
LIGHT_ORANGE='\033[0;33m' # #FA5301 equivalent
VERY_LIGHT='\033[1;33m'   # #FF8703 equivalent
NC='\033[0m'              # No Color

# Status Icons
TICK="${LIGHT_ORANGE}✓${NC}"
CROSS="${DARK_RED}✗${NC}"
INFO="${VERY_LIGHT}➔${NC}"

echo -e "${LIGHT_ORANGE}===========================================${NC}"
echo -e "${VERY_LIGHT}🚀 Developer Portfolio - Environment Setup ${NC}"
echo -e "${LIGHT_ORANGE}===========================================${NC}"
echo ""

# 1. Check for Git
if command -v git &> /dev/null; then
    echo -e " [${TICK}] Git is installed: $(git --version)"
else
    echo -e " [${CROSS}] ${DARK_RED}Git is missing.${NC} Please install it from https://git-scm.com"
fi

# 2. Check for Node.js & Package Manager
if command -v node &> /dev/null; then
    echo -e " [${TICK}] Node.js is installed: $(node -v)"
    
    # Check if npm or pnpm or yarn is preferred/available
    if command -v pnpm &> /dev/null; then
        PM="pnpm"
    elif command -v yarn &> /dev/null; then
        PM="yarn"
    else
        PM="npm"
    fi
    echo -e "     ${INFO} Detected package manager: $PM"
else
    echo -e " [${CROSS}] ${DARK_RED}Node.js is missing.${NC} Install it from https://nodejs.org"
fi

# 3. Check for Python
if command -v python3 &> /dev/null; then
    echo -e " [${TICK}] Python is installed: $(python3 --version)"
elif command -v python &> /dev/null; then
    echo -e " [${TICK}] Python is installed: $(python --version)"
else
    echo -e " [${CROSS}] ${DARK_RED}Python is missing.${NC}"
fi

# 4. Check for node_modules / dependencies
echo ""
echo -e "${VERY_LIGHT}Checking project dependencies...${NC}"
if [ -d "node_modules" ]; then
    echo -e " [${TICK}] Dependencies are already installed."
elif [ -f "package.json" ] && command -v $PM &> /dev/null; then
    echo -e " [${INFO} ] Found package.json. Installing dependencies with $PM..."
    $PM install
else
    echo -e "     ${INFO} No package.json found. Skipping dependency installation."
fi

echo ""
echo -e "${LIGHT_ORANGE}===========================================${NC}"
echo -e "${VERY_LIGHT}Setup scan complete! Launching portfolio...${NC}"
echo -e "${LIGHT_ORANGE}===========================================${NC}"

# 5. Automatically open index.html safely depending on OS
if [ -f "index.html" ]; then
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open index.html &> /dev/null &
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        open index.html
    elif [[ "$OSTYPE" == "cygwin" || "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
        start index.html
    else
        echo -e "Please open ${VERY_LIGHT}index.html${NC} manually in your favorite browser."
    fi
else
    echo -e "${DARK_RED}⚠️ Warning: index.html not found in this directory.${NC}"
fi