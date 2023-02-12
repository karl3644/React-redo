import { createContext } from "react";

export const PetContext = createContext({ pets: [], setPets: () => {} });
