clean:
	rm -rf build/

all: clean
	npx tsc

dev: all
	node build/app.js
