
//A JavaScript Map holds key-value pairs and similar to Hash Map or Dictionary in other languages
const context = new Map();

//set(key, val) : Adds or updates an element with a specified key and value.
export function setContext<T>(key: unknown, value: T) {
	context.set(key, value);
}


//get(key) : Returns the value associated with the specified key.
export function getContext(key: unknown) {
	return context.get(key);
}

//has(key) : Returns a boolean indicating whether an element with the specified key exists.
export function hasContext(key: unknown) {
	return context.has(key);
}

//get all context
export function getAllContext() {
	return context;
}
