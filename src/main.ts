import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001; // Render asignará el puerto desde el entorno

  await app.listen(port, '0.0.0.0'); // Asegúrate de usar '0.0.0.0' para ser accesible externamente
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
