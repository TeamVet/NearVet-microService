import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP, // Transport en TCP
    options: {
      port: 3001, // Asegúrate de que el puerto coincida con el configurado en el monolito
      host: '0.0.0.0', // Asegura que el servicio sea accesible
    },
  });
  await app.listen();
  console.log('Microservice is running on port 3001');
}

bootstrap();
