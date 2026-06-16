'use client'

export default function TrustedBy() {
  const companies = [
    { name: "Enterprise Co", initials: "EC" },
    { name: "Fashion Hub Ltd", initials: "FH" },
    { name: "MediCare Plus", initials: "MP" },
    { name: "Retail Pro", initials: "RP" },
    { name: "Finance Hub", initials: "FH" },
    { name: "Tech Solutions", initials: "TS" },
  ]

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-600 uppercase tracking-widest mb-8">
          Trusted by leading companies
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center justify-center">
              <div className="w-full h-16 flex items-center justify-center bg-gray-100 rounded-lg border border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mx-auto mb-1">
                    {company.initials}
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{company.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
