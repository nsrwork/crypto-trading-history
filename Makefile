code-style-fix:
	npx prettier --write .

push-npm:
	npm publish --access public

update-binance-info:
	node migrator.js > info.json
