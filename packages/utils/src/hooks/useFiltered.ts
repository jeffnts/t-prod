import { useState, useMemo } from "react"

export const useFiltered = <T>({ field, filterBy }: { field: T | any; filterBy: string[] }) => {
  const [search, setSearch] = useState<string>("")

  const value: T = useMemo(() => {
    const lowerCaseSearch = search.toLowerCase()

    const filter = filterBy.reduce((acc, field, index, array) => {
      acc =
        acc +
        `field.${field}.toLowerCase().includes('${lowerCaseSearch}') ${
          index + 1 < array.length ? " || " : ""
        }`

      return `${index === 0 ? "field => " : ""}${acc}`
    }, "")

    return field.filter(eval(filter))
  }, [search])

  return [value, setSearch]
}
