// mckn_build_a_minimal.ts

interface PipelineStage {
  name: string;
  execute: () => Promise<void>;
}

interface PipelineConfig {
  stages: PipelineStage[];
}

class Pipeline Simulator {
  private config: PipelineConfig;

  constructor(config: PipelineConfig) {
    this.config = config;
  }

  async run() {
    for (const stage of this.config.stages) {
      console.log(`Executing stage: ${stage.name}`);
      await stage.execute();
    }
  }
}

// Sample pipeline configuration
const pipelineConfig: PipelineConfig = {
  stages: [
    {
      name: 'Build',
      execute: async () => {
        console.log('Building...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Build completed!');
      },
    },
    {
      name: 'Test',
      execute: async () => {
        console.log('Testing...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Tests passed!');
      },
    },
    {
      name: 'Deploy',
      execute: async () => {
        console.log('Deploying...');
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log('Deployment successful!');
      },
    },
  ],
};

// Create and run the pipeline simulator
const simulator = new PipelineSimulator(pipelineConfig);
simulator.run();