export default [
  {
    id: 1,
    description: 'In der folgenden Tabelle wird beschrieben, welche Personen in ihren Veranstaltungen Skripte in welcher Anzahl verkaufen.',
    tableData: [
      {
        Veranstaltungsnummer: 112,
        Veranstaltungsname: 'Englisch',
        Personalnummer: 198,
        Name: 'Schulz',
        Skriptnummer: 2,
        Preis: 25,
        Anzahl: 4
      },
      {
        Veranstaltungsnummer: 112,
        Veranstaltungsname: 'Englisch',
        Personalnummer: 237,
        Name: 'Lange',
        Skriptnummer: 9,
        Preis: 44,
        Anzahl: 5
      },
      {
        Veranstaltungsnummer: 112,
        Veranstaltungsname: 'Englisch',
        Personalnummer: 11,
        Name: 'Meyer',
        Skriptnummer: 2,
        Preis: 25,
        Anzahl: 4
      },
      {
        Veranstaltungsnummer: 202,
        Veranstaltungsname: 'Spanisch',
        Personalnummer: 198,
        Name: 'Schulz',
        Skriptnummer: 4,
        Preis: 22,
        Anzahl: 9
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: ['Veranstaltungsnummer'],
        columns: ['Veranstaltungsname'],
        type: 'partiell'
      },
      {
        primaryKeys: ['Personalnummer'],
        columns: ['Name'],
        type: 'partiell'
      },
      {
        primaryKeys: ['Skriptnummer'],
        columns: ['Preis'],
        type: 'partiell'
      },
      {
        primaryKeys: ['Veranstaltungsnummer', 'Skriptnummer'],
        columns: ['Anzahl'],
        type: 'voll'
      }
    ],
    primaryKeys: ['Veranstaltungsnummer', 'Personalnummer', 'Skriptnummer']
  }
]