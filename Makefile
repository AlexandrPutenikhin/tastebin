all: clean
	npx tsc

clean:
	rm -rf build/

dev: all
	node build/app.js
