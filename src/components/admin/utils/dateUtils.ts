```typescript
import { format, formatDistanceToNow } from 'date-fns';

export function timeAgo(date: Date): string {
  return formatDistanceToNow(date, { addSuffix: true });
}

export function formatDate(date: Date, formatStr: string): string {
  return format(date, formatStr);
}
```