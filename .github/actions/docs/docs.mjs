import * as core from '@actions/core'

const changedFiles = core.getInput('changed_files', { required: true }).split(' ')

const shouldSkip = changedFiles.every((file) => file.startsWith('docs/'))

core.setOutput('should_skip', shouldSkip)
