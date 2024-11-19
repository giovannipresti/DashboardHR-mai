import React from "react";
import {
  Building2,
  ChartBar,
  Users,
  Briefcase,
  Brain,
  FileText,
} from "lucide-react";

// Basic UI Components
const Card = ({ className = "", children }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>
);

const CardHeader = ({ className = "", children }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);

const CardTitle = ({ className = "", children }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ className = "", children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const HRRatioAnalysis = () => {
  const benchmarkData = [
    {
      category: "Tech Pure Players",
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      companies: [
        {
          name: "Microsoft Italia",
          employees: 900,
          hrRatio: "1:50",
          hrTeam: 18,
          notes: "Focus su technical recruiting e sviluppo competenze",
        },
        {
          name: "SAP Italia",
          employees: 700,
          hrRatio: "1:47",
          hrTeam: 15,
          notes: "Forte investimento in talent development",
        },
        {
          name: "Oracle Italia",
          employees: 650,
          hrRatio: "1:46",
          hrTeam: 14,
          notes: "Enfasi su continuous learning",
        },
      ],
    },
    {
      category: "Engineering Consulting",
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      companies: [
        {
          name: "Alten Italia",
          employees: 2800,
          hrRatio: "1:52",
          hrTeam: 54,
          notes: "Simile business model ad AVL",
        },
        {
          name: "Altran Italia",
          employees: 3000,
          hrRatio: "1:50",
          hrTeam: 60,
          notes: "Gestione consulenti tecnici",
        },
        {
          name: "Engineering",
          employees: 2500,
          hrRatio: "1:48",
          hrTeam: 52,
          notes: "Alta specializzazione tecnica",
        },
      ],
    },
  ];

  const ratioDrivers = [
    {
      factor: "Complessità Recruiting",
      impact: "Alto",
      description: [
        "Profili altamente specializzati",
        "Mercato molto competitivo",
        "Processo selezione articolato (40h/posizione)",
        "Multiple technical interviews",
      ],
    },
    {
      factor: "Sviluppo Competenze",
      impact: "Alto",
      description: [
        "Continuous learning necessario",
        "Training tecnici specialistici",
        "Certificazioni professionali",
        "Career path personalizzati",
      ],
    },
    {
      factor: "People Management",
      impact: "Medio-Alto",
      description: [
        "Performance management strutturato",
        "Compensation differenziata",
        "Gestione aspettative elevate",
        "Work-life balance",
      ],
    },
    {
      factor: "Administration",
      impact: "Medio",
      description: [
        "Contratti complessi",
        "Benefit personalizzati",
        "Travel policy",
        "Remote working",
      ],
    },
  ];

  const openDetailedReport = () => {
    window.open("/hr-ratio-report.html", "_blank");
  };

  return (
    <div className="w-full space-y-6 p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Analisi HR Ratio Settore Tech/Engineering
        </h1>
        <button
          onClick={openDetailedReport}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors"
        >
          <FileText className="w-5 h-5" />
          <span>Report Completo</span>
        </button>
      </div>

      <Card className="mb-6">
        <CardContent>
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <div className="flex items-center space-x-4">
              <span>Fonte: Mercer Tech Survey 2023</span>
              <span>•</span>
              <span>Periodo: 2022-2024</span>
              <span>•</span>
              <span>15+ aziende analizzate</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {benchmarkData.map((category) => (
        <Card key={category.category} className="mb-6">
          <CardHeader className="flex items-center space-x-2">
            {category.icon}
            <CardTitle>{category.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {category.companies.map((company) => (
                <div key={company.name} className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    {company.name}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dipendenti:</span>
                      <span className="font-medium">{company.employees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">HR Team:</span>
                      <span className="font-medium">{company.hrTeam} FTE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ratio:</span>
                      <span className="font-medium text-blue-600">
                        {company.hrRatio}
                      </span>
                    </div>
                    <div className="mt-2 text-gray-600 italic">
                      {company.notes}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <Card>
        <CardHeader>
          <CardTitle>Driver Ratio HR/Dipendenti</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ratioDrivers.map((driver) => (
              <div key={driver.factor} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-gray-900">{driver.factor}</h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      driver.impact === "Alto"
                        ? "bg-red-100 text-red-800"
                        : driver.impact === "Medio-Alto"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    Impatto: {driver.impact}
                  </span>
                </div>
                <ul className="space-y-1">
                  {driver.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusioni per AVL Italia</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-600">
              L'analisi dei benchmark di settore supporta un ratio target 1:50
              per AVL Italia, considerando:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <div className="w-1 h-1 rounded-full bg-gray-400 mt-2"></div>
                <span>
                  Allineamento con i principali player tech/engineering (range
                  1:45-1:75)
                </span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <div className="w-1 h-1 rounded-full bg-gray-400 mt-2"></div>
                <span>
                  Similarità di business model con società engineering
                  consulting
                </span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <div className="w-1 h-1 rounded-full bg-gray-400 mt-2"></div>
                <span>
                  Complessità dei processi HR in linea con benchmark
                  (recruiting, development, admin)
                </span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <div className="w-1 h-1 rounded-full bg-gray-400 mt-2"></div>
                <span>
                  Ambizioni di crescita che richiedono struttura HR robusta
                </span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="text-sm text-blue-800">
                  Per AVL Italia (475 headcount), il ratio target 1:50 si
                  traduce in un dimensionamento di 9.5 FTE, con focus
                  particolare su recruiting (3 FTE), development (1 FTE) e
                  organization development (1 FTE).
                </p>
                <button
                  onClick={openDetailedReport}
                  className="flex items-center space-x-1 ml-4 text-sm text-blue-700 hover:text-blue-900"
                >
                  <span>Approfondisci</span>
                  <FileText className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRRatioAnalysis;
