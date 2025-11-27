export interface Field {
    name: string;
    type: FieldType;
}

export type Language = {
    id: "java" | "python";
    name: string;

}

export type FieldType = "string" | "integer" | "boolean" | "date" | "array";
export type OutputFormat = "class" | "record" | "dict" | "dataclass" | "pydantic";
