import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration des pipes globaux pour la validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('API Example') // Mettez le titre de votre API
    .setDescription('Description de l\'API') // Ajoutez la description de votre API
    .setVersion('1.0')
    .addTag('example') // Modifiez ou ajoutez des tags selon vos besoins
    .build();

  const document = SwaggerModule.createDocument(app, config); // Swagger document
  SwaggerModule.setup('api', app, document); // Route pour Swagger : /api

  // Autoriser les requêtes CORS
  app.enableCors();

  // Démarrer le serveur
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/api`);
}

bootstrap();
