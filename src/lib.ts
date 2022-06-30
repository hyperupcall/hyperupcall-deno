import * as path from 'https://deno.land/std@0.145.0/path/mod.ts'

export function woof() {
	console.log('Woof!')
}

export function xdg(appname: string) {
	const home = Deno.env.get('HOME')
	if (!home) {
		throw new Error('Failed to get environment variable: HOME')
	}

	let dataHome = Deno.env.get('XDG_DATA_HOME')
	if (!dataHome || dataHome.at(0) != '/')
		dataHome = path.join(home, '.local', 'share')

	let configHome = Deno.env.get('XDG_CONFIG_HOME')
	if (!configHome || configHome.at(0) != '/')
		configHome = path.join(home, '.config')

	let stateHome = Deno.env.get('XDG_STATE_HOME')
	if (!stateHome || stateHome.at(0) != '/')
		stateHome = path.join(home, '.local', 'state')

	let cacheHome = Deno.env.get('XDG_CACHE_HOME')
	if (!cacheHome || cacheHome.at(0) != '/')
		cacheHome = path.join(home, '.cache')

	return {
		dataHome: path.join(dataHome, appname),
		configHome: path.join(configHome, appname),
		stateHome: path.join(stateHome, appname),
		cacheHome: path.join(cacheHome, appname),
	}
}
