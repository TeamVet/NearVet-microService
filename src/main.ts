import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const port = process.env.PORT || 3001; // Usar el puerto dinámico de Render
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    options: {
      port: Number(port),
      host: '0.0.0.0',
    },
  });

  await app.startAllMicroservices();
  await app.listen(port);
  console.log(`Microservice listening on port: ${port}`);
}

bootstrap();
