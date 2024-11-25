import React from "react";
import { Card } from "./UI";
import {
  TrendingDown,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const ExpenseAnalysis = () => {
  const activities = [
    {
      category: "Processo Attuale",
      totalHours: 384,
      fte: "0.22",
      phases: [
        {
          name: "Raccolta e Verifica Documentazione",
          hours: 154,
          tasks: [
            "Raccolta documenti fisici",
            "Verifica completezza",
            "Richiesta integrazioni",
            "Archiviazione temporanea",
          ],
          automation: "Nessuna",
        },
        {
          name: "Processing e Contabilizzazione",
          hours: 76,
          tasks: [
            "Inserimento dati",
            "Calcolo rimborsi",
            "Contabilizzazione",
            "Archiviazione finale",
          ],
          automation: "Parziale",
        },
      ],
    },
    {
      category: "Processo Post-Concur",
      totalHours: 115,
      fte: "0.07",
      phases: [
        {
          name: "Gestione Sistema",
          hours: 23,
          tasks: [
            "Manutenzione policy",
            "Gestione workflow",
            "Setup utenti",
            "Configurazioni",
          ],
          automation: "Alta",
        },
        {
          name: "Reporting e Analisi",
          hours: 35,
          tasks: [
            "Report spese per categoria",
            "Analisi trend",
            "KPI monitoraggio",
            "Reportistica",
          ],
          automation: "Alta",
        },
      ],
    },
  ];

  return (
    <div className="w-full space-y-6 p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analisi Note Spese</h1>
        <div className="flex items-center space-x-2">
          <TrendingDown className="w-6 h-6 text-green-600" />
          <span className="text-lg font-bold text-green-600">-70% Effort</span>
        </div>
      </div>

      {activities.map((activity) => (
        <Card key={activity.category} className="shadow-lg">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-blue-700">
                {activity.category}
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {activity.totalHours}h ({activity.fte} FTE)
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {activity.phases.map((phase) => (
                <div key={phase.name} className="border-b pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-900">{phase.name}</h3>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-500">
                        {phase.hours}h/anno
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          phase.automation === "Alta"
                            ? "bg-green-100 text-green-800"
                            : phase.automation === "Parziale"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {phase.automation}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {phase.tasks.map((task, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 text-sm text-gray-600"
                      >
                        {activity.category.includes("Post") ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                        )}
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ExpenseAnalysis;
