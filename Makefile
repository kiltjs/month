# --- month

.PHONY: test release

install:
	npm install

test:
	@$(shell npm bin)/eslint month.js
	@$(shell npm bin)/eslint tests
	@$(shell npm bin)/mocha tests

publish.release:
	@echo "\nrunning https://gist.githubusercontent.com/jgermade/d394e47341cf761286595ff4c865e2cd/raw/\n"
	$(shell curl -fsSL https://gist.githubusercontent.com/jgermade/d394e47341cf761286595ff4c865e2cd/raw/ -o - | sh -)

release: test publish.release

# DEFAULT TASKS

.DEFAULT_GOAL := test
