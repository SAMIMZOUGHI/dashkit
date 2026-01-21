// =============================================================================
// FICHIER : components/sections/Features.tsx
// RÔLE : Section présentant les avantages des templates
// =============================================================================

// Liste des fonctionnalités avec icônes
const features = [
  {
    icon: "⚡",
    title: "Rapide à intégrer",
    description: 
      "Installez et personnalisez votre dashboard en quelques minutes.  Code propre et bien documenté.",
  },
  {
    icon: "🎨",
    title: "Design moderne",
    description:
      "Interface élégante et professionnelle. Mode sombre/clair inclus.  100% responsive.",
  },
  {
    icon: "🔧",
    title: "Personnalisable",
    description: 
      "Composants modulaires faciles à modifier. Tailwind CSS pour un styling rapide.",
  },
  {
    icon: "📱",
    title: "Responsive",
    description:
      "S'adapte parfaitement à tous les écrans :  mobile, tablette et desktop.",
  },
  {
    icon: "🔒",
    title: "TypeScript",
    description:
      "Code typé pour moins de bugs et une meilleure expérience de développement.",
  },
  {
    icon: "📚",
    title: "Documentation",
    description:
      "Guide complet avec exemples de code.  Support par email pendant 6 mois.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm: px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
            Tout ce dont vous avez besoin
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            Nos templates incluent tout le nécessaire pour créer une application SaaS professionnelle.
          </p>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-zinc-200 hover: border-zinc-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Icône */}
              <div className="text-4xl mb-4">{feature.icon}</div>
              
              {/* Titre */}
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}