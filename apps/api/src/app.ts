import express, {Express} from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import Controller from '@/utils/interfaces/controller.interface';
import ErrorMiddleware from '@/middlewares/error.middleware';

class App {
  public express: Express;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;

    this.initialiseDatabaseConnection();
    this.initialiseMiddleware();
    this.initialiseControllers(controllers);
    this.initialiseErrorHandling();
  }

  private initialiseMiddleware(): void {
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(express.urlencoded({extended: false}));
    this.express.use(compression());
  }

  private initialiseControllers(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.express.use(controller.router);
    });
  }

  private initialiseErrorHandling(): void {
    this.express.use(ErrorMiddleware);
  }

  private initialiseDatabaseConnection(): void {
    //TODO: Add database connection
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`Server is running on ${this.port}`);
    });
  }
}

export default App;
