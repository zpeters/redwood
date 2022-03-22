import * as core from '@actions/core'

const changedFiles = core.getInput('changed_files', { required: true });

console.log({
  changedFiles
})

const shouldSkip = true

core.setOutput('should_skip', shouldSkip)
