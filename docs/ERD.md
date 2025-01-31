```mermaid
erDiagram
    PARK_AREA ||--o{ PARK_SERVICE : supports
    PARK_AREA {
        int id
        string title
    }
    PARK_SERVICE {
        int id
        string name
    }
    GUEST {
        int id
        string firstName
        string lastName
    }
    PARK_AREA }|..|{ GUEST : visits
