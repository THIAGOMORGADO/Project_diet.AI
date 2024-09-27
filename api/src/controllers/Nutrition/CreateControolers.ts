import type { IUSerDTO } from "../../dtos/UserDTO";
import { NutritionService } from "../../services/NutritionsServices";

export const NutritionCreateController = {
  async execulte(req, res) {
    const { name, weight, height, age, gender, objective, level } =
      req.body as IUSerDTO;

    const dataUSer = {
      name,
      weight,
      height,
      age,
      gender,
      objective,
      level,
    };
    const nutrition = await NutritionService.exculte(dataUSer);

    return res.status(201).json(nutrition);
  },
  async resultAI(req, res) {
    const resoponseText = "```json\n{\n  \"nome\": \"Thiago\",\n  \"sexo\": \"masculino\",\n  \"idade\": 32,\n  \"altura\": 1.92,\n  \"peso\": 79,\n  \"objetivo\": \"Ficar no peso ideal\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da Manhã\",\n      \"alimentos\": [\n        \"1 fatia de pão integral\",\n        \"1 ovo cozido\",\n        \"1 banana\",\n        \"1 copo de leite desnatado\",\n        \"1 xícara de café com adoçante\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manhã\",\n        \"alimentos\": [\n        \"1 iogurte grego natural desnatado\",\n        \"1/2 xícara de frutas vermelhas\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis cozido\",\n        \"1 porção de salada de folhas verdes com azeite de oliva e vinagre\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 fatia de pão integral\",\n        \"1 colher de sopa de pasta de amendoim\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe assado\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de couve refogada\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche da Noite\",\n      \"alimentos\": [\n        \"1 iogurte grego natural desnatado\",\n        \"1 colher de sopa de granola\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Multivitamínico\",\n    \"Ômega 3\"\n  ]\n}\n```"
    

    try {
      let jsonString = resoponseText.replace(/```\w*\n/g, "").replace(/\```/g,'').trim();

      return res.status(200).json(JSON.parse(jsonString));
    } catch (error) {
      console.error(error);
    }
  }
};
