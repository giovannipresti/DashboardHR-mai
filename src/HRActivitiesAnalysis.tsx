import React from "react";
import { Users, Clock, TrendingDown, Settings, ArrowRight } from "lucide-react";

const HRActivitiesAnalysis = () => {
  const teamActivities = [
    {
      role: "Payroll Specialist (Manuela)",
      currentActivities: [
        {
          name: "Gestione Presenze e Note Spese",
          hours: 80,
          automationPotential: "Alto",
          impact: "Concur e SuccessFactors riducono effort 70%",
        },
        {
          name: "Interfaccia Consulente Lavoro",
          hours: 40,
          automationPotential: "Medio",
          impact: "Automazione export dati riduce 40% effort",
        },
        {
          name: "Pagamenti e Amministrazione",
          hours: 30,
          automationPotential: "Alto",
          impact: "Integrazione bancaria automatizza 60%",
        },
        {
          name: "Documentazione e Archivio",
          hours: 20,
          automationPotential: "Alto",
          impact: "DMS riduce effort 80%",
        },
      ],
      futureState: {
        automation: ["SuccessFactors", "Concur", "DMS"],
        newFocus: [
          "Analytics payroll",
          "Process optimization",
          "Compliance monitoring",
        ],
      },
    },
    {
      role: "Labour Cost Specialist (Elena)",
      currentActivities: [
        {
          name: "Analisi Costo del Lavoro",
          hours: 60,
          automationPotential: "Medio",
          impact: "Dashboard automatiche riducono 50% effort",
        },
        {
          name: "Gestione SAP e Reporting",
          hours: 50,
          automationPotential: "Alto",
          impact: "SuccessFactors automatizza 70% attività",
        },
        {
          name: "MBO e Compensation",
          hours: 40,
          automationPotential: "Medio",
          impact: "Sistema riduce effort calcolo 45%",
        },
      ],
      futureState: {
        automation: ["SuccessFactors Analytics", "Dashboard automatiche"],
        newFocus: [
          "Strategic planning",
          "Advanced analytics",
          "Business partnership",
        ],
      },
    },
  ];

  return (
    <div className="w-full space-y-6 p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Analisi Attività Team HR e Impatto Automazione
        </h1>
      </div>

      {teamActivities.map((member) => (
        <div
          key={member.role}
          className="p-6 bg-white rounded-lg shadow-lg mb-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-blue-700">
              {member.role}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {member.currentActivities.map((activity) => (
                <div key={activity.name} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-900">
                      {activity.name}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        activity.automationPotential === "Alto"
                          ? "bg-green-100 text-green-800"
                          : activity.automationPotential === "Medio"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {activity.automationPotential} potenziale
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>{activity.impact}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Sistemi di Automazione
                  </h3>
                  <ul className="space-y-1">
                    {member.futureState.automation.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <Settings className="w-4 h-4 text-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Nuovo Focus
                  </h3>
                  <ul className="space-y-1">
                    {member.futureState.newFocus.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">
          Conclusioni Chiave
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">
              Opportunità di Automazione
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <div className="w-1 h-1 rounded-full bg-gray-400 mt-2"></div>
                <span>
                  Forte potenziale di automazione in attività amministrative
                  (60-70%)
                </span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <div className="w-1 h-1 rounded-full bg-gray-400 mt-2"></div>
                <span>
                  SuccessFactors come enabler principale di efficienza
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Evoluzione Ruoli</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <div className="w-1 h-1 rounded-full bg-gray-400 mt-2"></div>
                <span>Shift da attività operative a strategiche</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <div className="w-1 h-1 rounded-full bg-gray-400 mt-2"></div>
                <span>Maggior focus su analisi e business partnership</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRActivitiesAnalysis;
