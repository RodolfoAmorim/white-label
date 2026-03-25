import { SearchIcon } from "lucide-react"
import { Input } from "../form/input";

export function GlobalSearch() {
  return (
    <Input.Root>
      <Input.Icon icon={SearchIcon} />
      <Input.Field placeholder="Buscar produtos, marcas..." />
    </Input.Root>
  );
}
