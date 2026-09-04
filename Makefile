SRC_DIR=src/

all:
	node $(SRC_DIR)app.ts

checkTS:
	npx tsc
