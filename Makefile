BUILD_DIR=build/

all: clean
	npx tsc

clean:
	rm -rf $(BUILD_DIR)

dev: all
	node $(BUILD_DIR)app.js
