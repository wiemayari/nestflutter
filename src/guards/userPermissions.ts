export interface Permission {
    resource: string; // La ressource (ex: "doctors", "patients")
    actions: string[]; // Liste des actions autorisées (ex: ["read", "write"])
  }
  