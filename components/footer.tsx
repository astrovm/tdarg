import { Brain, GitBranch } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6" />
              <span className="text-lg font-semibold">Tdarg</span>
            </div>
            <p className="text-gray-400">
              Portal integral de información sobre TDAH en Argentina con herramientas prácticas
              y guías educativas basadas en evidencia científica.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Contacto</h5>
            <p className="text-gray-400 mb-4">
              <a href="mailto:tdarg@4st.li" className="hover:text-white transition-colors">
                tdarg@4st.li
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              Para consultas, sugerencias o reportar información desactualizada.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Código Abierto</h5>
            <p className="text-gray-400 mb-4">
              Este proyecto es de código abierto. Podés contribuir mejorando el contenido o reportando issues.
            </p>
            <a
              href="https://github.com/astrovm/tdarg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <GitBranch className="h-4 w-4" />
              <span>Ver en GitHub</span>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Tdarg. Información con fines educativos.</p>
        </div>
      </div>
    </footer>
  )
}
