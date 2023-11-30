### Dictionary of Object Attributes

| Object | Attribute | Brief Description | Type | Constraints |
|--------|-----------|---------------------|------|-------------|
| Consumer | Email | Consumer's Google email | text | Length < 64 characters |
| Consumer | Name | User's name | text | Length < 64 characters |
| Project | Name | Project name | text | Length < 64 characters |
| Project | Description | Textual description of the project | text | Length < 64 characters |
| Sleep Schedule | Start Time | Start time of sleep | time | None |
| Sleep Schedule | End Time | End time of sleep | time | None |
| Sleep Schedule | Quality | Conditional sleep quality | number | <100 |
| Sleep Notification | Sending Time | Time when notification will be displayed | time | None |
| Sleep Notification | Text | Text to be displayed in the notification | text | Length < 64 characters |
| Schedule | Days | Days when notifications won't be sent | array of dates | 7 elements |