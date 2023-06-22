![EILD-Logo](src/img/eild_header_logo.png)

# NF-Trainer

Der Normalformen-Trainer (NF-Trainer) ist eine Lernanwendung für Normalformen bzw. den Normalisierungsprozess in Datenbanken. Er demonstriert in einem stufenweisen Verfahren, wie die Normalisierung von Relationen interaktiv bis zur 3. Normalform bewältigt werden kann.
Dabei wird der Gesamtalgorithmus in Einzelschritte zerlegt und nach jedem Schritt die korrekte Lösung mit einem Zwischenergebnis angezeigt.

Vorausgesetzt werden Kenntnisse der Begriffe und Definitionen von funktionaler Abhängigkeit, 1NF, 2NF und 3NF.

Schlagworte: Datenbanksysteme, Datenbank, Normalform, Normalisierung

## Weitere Informationen
Der NF-Trainer wurde im Projekt EILD.nrw weiterentwickelt. In EILD.nrw wird ein Ansatz mit weitgehender Adaptierbarkeit und Wiederverwendbarkeit der Lehrinhalte umgesetzt. Die entwickelten OER werden über ORCA.nrw zur Verfügung gestellt.
- [EILD.nrw]
- [ORCA.nrw]
- [ORCA.nrw Github]

## Verwendung

Es gibt verschiedene Möglichkeiten den Trainer zu benutzen. Am einfachsten ist die Verwendung der auf GitHub bereitgestellten Version [NF-Trainer GH Pages]. Diese wird bei Änderungen aktualisiert und muss nicht selbst betrieben werden.

Alternativ lässt sich diese Version aus dem `gh-pages`-Branch als .zip-Datei herunterladen und anschließend auf Ilias, Moodle oder ähnliche Plattformen hochladen. Dort muss diese lediglich entpackt werden. Ilias erkennt die `index.html` automatisch als Startpunkt der Anwendung, auf anderen Plattformen muss dies eventuell noch manuell passieren.

Als letzte Alternative kann die Anwendung auch aus dem Sourcecode generiert werden. Das entsprechende Build-Skript aus der Package.json lässt sich mit `npm run build` ausführen. Der generierte Ordner ist dann identisch zu dem, der auch im `gh-pages`-Branch liegt.

## Aufgabenübersicht
Die Tabelle enthält eine Übersicht aller im NF-Trainer enthaltenen Aufgaben mit der Information, welche Normalformen jeweils trainiert werden.

| Aufgabe | Thema                    | 1NF               | 2NF               | 3NF                    |
|---------|--------------------------|-------------------|-------------------|------------------------|
| 1       | Skriptverkauf            | bereits in 1NF    | noch nicht in 2NF | mit 2NF bereits in 3NF |
| 2       | Patienten der Arztpraxis | noch nicht in 1NF | noch nicht in 2NF | noch nicht in 3NF      |
| 3       | Küchen-Großhändler       | bereits in 1NF    | noch nicht in 2NF | noch nicht in 3NF      |
| 4       | Autohändler              | bereits in 1NF    | noch nicht in 2NF | noch nicht in 3NF      |
| 5       | Prüfungsamt              | bereits in 1NF    | noch nicht in 2NF | noch nicht in 3NF      |
| 6       | Lebensmittelprüfung      | bereits in 1NF    | noch nicht in 2NF | mit 2NF bereits in 3NF |
| 7       | Zimmer im Krankenhaus    | bereits in 1NF    | noch nicht in 2NF | noch nicht in 3NF      |
| 8       | Autohändler 2            | bereits in 1NF    | noch nicht in 2NF | noch nicht in 3NF      |

## Lizenzierung

[![License: MIT][MIT-shield]][MIT]

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

Die Anwendung NF-Trainer wurde ursprünglich von der [Technischen Hochschule Köln][TH Köln] im Rahmen der Online-Lernplattform [EDB] entwickelt und wurde als Teil des Projektes [EILD.nrw] von Alexander Kosmehl weiterentwickelt und als Open-Source Anwendung veröffentlicht.

Dieses Repository enthält Software unter [MIT-Lizenz][MIT] und Content unter [Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa]. Content sind insbesondere die Aufgabenstellungen, Definitionen und Hinweise. Ausgenommen von der CC BY-SA 4.0 Lizenz sind die verwendeten Logos sowie alle anders lizenzierten Inhalte.

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

![image](https://user-images.githubusercontent.com/73349129/233968870-b61f0850-e7c2-489f-a597-53e030794b22.png)



[MIT]: https://github.com/orca-nrw/btree-animate-touch/blob/master/LICENCE
[MIT-shield]: https://img.shields.io/badge/License-MIT-yellow.svg
[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
[HSD]: https://www.hs-duesseldorf.de/
[TH Köln]: https://www.th-koeln.de/
[EDB]: https://edb2.gm.th-koeln.de/index
[NF-Trainer]: https://github.com/orca-nrw/nf-trainer/tree/main
[NF-Trainer GH Pages]: https://orca-nrw.github.io/nf-trainer/
[EILD.nrw]: https://www.eild.nrw/
[EILD.nrw GitHub]: https://github.com/EILD-nrw
[ORCA.nrw]: https://www.orca.nrw/
[ORCA.nrw Github]: https://github.com/orca-nrw
