# drizzle-to-python
Javascript package (npm) to translate your Drizzle ORM schemas into Python (Pydantic/TypedDict/Dataclass)

## Installation
```npm install drizzle-to-python```

## Usage
```typescript
import { convertToPydantic } from 'drizzle-to-python';
// Your Drizzle schema
const schema = import { pgTable, varchar, integer } from 'drizzle-orm/pg-core';export const users = pgTable('users', { id: integer('id').primaryKey(), name: varchar('name', { length: 256 }), email: varchar('email', { length: 256 })});;
// Convert to Pydantic
const pythonCode = convertToPydantic(schema);
console.log(pythonCode);
```

## Output
```python
from pydantic import BaseModel
from typing import Optional
class User(BaseModel):
id: int
name: Optional[str] = None
email: Optional[str] = None
```

## Features
- Convert Drizzle schema to:
  - [ ] Pydantic models
  - [ ] TypedDict
  - [ ] Dataclasses
- Supports common Drizzle types
- Preserves nullable fields
- Handles relationships

## License

MIT