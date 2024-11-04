export interface DrizzleColumn {
  name: string;
  type: string;
  nullable: boolean;
  isPrimaryKey: boolean;
}

export interface DrizzleTable {
  name: string;
  columns: DrizzleColumn[];
}

export interface ParsedSchema {
  tables: DrizzleTable[];
}
