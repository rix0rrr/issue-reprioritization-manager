const { actions } = require('projen');
const project = new actions.GitHubActionTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'issue-graduation-manager',
  metadata: {
    author: 'Kaizen Conroy',
    inputs: [{
      id: 'github-token',
      description: 'GitHub token',
      required: true,
    }, {
      id: 'original-label',
      description: 'label that is candidate for graduation',
      required: true,
    }, {
      id: 'new-label',
      description: 'new label attached to all graduated issues',
      required: true,
    }, {
      id: 'graduation-threshold',
      description: 'the threshold count necessary for graduation',
      required: false,
      default: '20',
    }, {
      id: 'graduation-message',
      description: 'display this message on issues that graduate',
      required: false,
      default: [
        'This issue has received a significant amount of attention',
        'so we are automatically upgrading its priority.',
        'A member of the community will see the re-prioritization',
        'and update the issue accordingly.',
      ].join(' '),
    }, {
      id: 'omit-message',
      description: 'set this flag if you do not want automatic messages on graduated issues',
      required: false,
      default: false,
    }],
    outputs: [{
      id: 'num-graduated',
      description: 'returns the number of graduated issues',
    }],
    branding: {
      color: 'purple',
      icon: 'arrow-up-circle',
    },
  },
});
project.synth();