// validation/validate.js
import { schemaRegistry } from "./schemas/schema-registery";

export const validate = async (body, schemaKey) => {
  const schema = schemaRegistry[schemaKey];
  if (!schema) {
    throw new Error(`Validation schema "${schemaKey}" not found`);
  }

  const result = await schema.safeParseAsync(body);

  if (!result.success) {
    const validationError = new Error("Validation failed");
    validationError.name = "ValidationError";

    validationError.errors = (result.error.issues || []).map((e) => ({
      field: e.path.join("."),
      message: e.message,
    }));

    throw validationError;
  }

  return result.data; // validated data
};
