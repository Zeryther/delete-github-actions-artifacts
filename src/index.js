import fetch from 'node-fetch';
import readline from 'readline-sync';
import progress from 'cli-progress';

const token = await readline.question('GitHub API Token: ');
const repository = await readline.question('Repository (ex. organization/name): ');

const headers = {
	'Authorization': 'Token ' + token,
	'Accept': 'application/vnd.github.v3+json',
	'User-Agent': 'https://github.com/Zeryther/delete-github-actions-artifacts'
};

let artifacts = [];
const pageSize = 100;
let pageIndex = 1;
let page = undefined;

while (!page || page.length >= pageSize) {
	page = (await (await fetch(`https://api.github.com/repos/${repository}/actions/artifacts?per_page=${pageSize}&page=${pageIndex}`, {
		headers
	})).json()).artifacts;

	pageIndex++;

	artifacts = artifacts.concat(page);
}

console.log(`Found ${artifacts.length} artifacts`);

const bar = new progress.SingleBar({}, progress.Presets.shades_classic);

bar.start(artifacts.length, 0);

artifacts.forEach(async artifact => {
	await fetch(`https://api.github.com/repos/${repository}/actions/artifacts/${artifact.id}`, {
		method: 'delete',
		headers
	});

	bar.increment();
});

bar.stop();

console.log('Done');