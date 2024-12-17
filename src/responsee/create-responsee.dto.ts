export class CreateResponseeDto {
  query: string;       // La question posée par l'utilisateur
  response: string;    // La réponse générée par l'IA
  category: string;
  userId: string; // Add this field

  }
