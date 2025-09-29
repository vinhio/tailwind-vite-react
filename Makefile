.PHONY: install dev ios


install:
	npm install

dev:
	npm run dev

ios.initial:
	npm run build
	npm i @capacitor/core
	npm i -D @capacitor/cli
	npx cap init
	npm i @capacitor/ios
	npx cap add ios
	npx cap sync

ios:
	npm run build
	npx cap sync
