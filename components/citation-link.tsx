interface CitationLinkProps {
  number: number
}

export function CitationLink({ number }: CitationLinkProps) {
  return (
    <sup className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors cursor-pointer">
      <a href={`#ref-${number}`} className="no-underline">
        [{number}]
      </a>
    </sup>
  )
}